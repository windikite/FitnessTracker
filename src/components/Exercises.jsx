import AddExercise from './AddExercise';
import ViewExercises from "./ViewExercises";

function Exercises() {
    return (
        <div>
          <h1>Fitness Tracker</h1>
          <AddExercise />
          <br />
          <ViewExercises />
        </div>
    )
}

export default Exercises;