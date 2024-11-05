import { useSelector } from "react-redux";
import DeleteExercise from "./DeleteExercise";
import { Row, Col, ListGroup, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ViewExercises = () => {
    const exercises = useSelector((state) => state.exercises.exercises);
    const navigate = useNavigate();

    return (
        <Row className="justify-content-md-center">
            <Col md={6}>
                <ListGroup>
                    {exercises.map((exercise) => (
                        <ListGroup.Item key={exercise.id} className="d-flex justify-content-between align-items-center flex-row">
                            <span>{exercise.type} - {exercise.duration} minutes - {exercise.calories} kcal</span>
                            <DeleteExercise id={exercise.id} />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Button variant="warning" onClick={() => navigate('/edit-exercises')}>Edit Exercises</Button>
        </Row>
    )
}

export default ViewExercises;