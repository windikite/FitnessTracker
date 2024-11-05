import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateExercise } from "../features/exercisesSlice";
import { Button, Container, Row, Col, Form, Dropdown, Modal, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UpdateExercises = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');
    const [errors, setErrors] = useState({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const navigate = useNavigate();

    const exercises = useSelector((state) => state.exercises.exercises);

    useEffect(() => {
        const found = exercises.findIndex(x => x.id === id);
        if(found != -1){
            setType(exercises[found].type);
            setDuration(exercises[found].duration);
            setCalories(exercises[found].calories);
        }
    }, [id])

    const validateForm = () => {
        const errors = {};
        if(!type) errors.type = 'Type is required';
        if(!duration || duration <= 0) errors.duration = 'Duration must be a positive number';
        if(!calories || calories < 0) errors.calories = 'Calories must be at least 0';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        dispatch(updateExercise({id, type, duration, calories}));
        setShowSuccessModal(true);
    }

    const handleclose = () => {
        setShowSuccessModal(false);
    }

    return (
        <Container>
            <Row className="justify-content-md-center" >
                <Col md={6}>
                    <h2>Update Exercise</h2>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Choose Exercise
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {exercises.map((exercise) => (
                                <Dropdown.Item 
                                    key={exercise.id}
                                    onClick={() => setId(exercise.id)}
                                    >{exercise.type} - {exercise.duration} min. - {exercise.calories} k/cal</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form onSubmit={handleUpdate}>
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
                        <Button variant="success" type="submit" className="w-100">Update</Button>
                        <Button variant="primary" onClick={() => navigate('/exercises')} className="w-100">View Exercises</Button>

                        <Modal show={showSuccessModal} onHide={handleclose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Success</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Exercise has been successfully updated!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleclose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default UpdateExercises;