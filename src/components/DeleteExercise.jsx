import { useDispatch } from "react-redux";
import { deleteExercise } from "../features/exercisesSlice";
import { Button } from "react-bootstrap";

const DeleteExercise = ({id}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteExercise(id));
    }

    return (
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
    )
}

export default DeleteExercise;