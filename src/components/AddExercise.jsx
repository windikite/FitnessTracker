import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../features/exercisesSlice";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const AddExercise = () => {
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const validateForm = () => {
        const errors = {};
        if(!type) errors.type = 'Type is required';
        if(!duration || duration <= 0) errors.duration = 'Duration must be a positive number';
        if(!calories || calories < 0) errors.calories = 'Calories must be at least 0';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        dispatch(addExercise({id: Date.now(), type, duration, calories}));
        setType('');
        setDuration('');
        setCalories('');
    }

    return (
        <Container>
            <Row className="justify-content-md-center" >
                <Col md={6}>
                    <h2>Add New Exercise</h2>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                            <Form.Label>Exercise Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={type}
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                isInvalid={!!errors.type}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.type}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Duration (minutes)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={duration}
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                isInvalid={!!errors.duration}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.duration}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Calories</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={calories}
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                                isInvalid={!!errors.calories}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.calories}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">Add Exercise</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddExercise;