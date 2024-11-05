import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exercises: []
};

export const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        addExercise: (state, action) => {
            state.exercises.push(action.payload);
        },
        deleteExercise: (state, action) => {
            state.exercises = state.exercises.filter((exercise) => exercise.id !== action.payload)
        },
        updateExercise: (state, action) => {
            let found = state.exercises.findIndex(x => x.id === action.payload.id);
            if (found != -1){
                state.exercises[found] = action.payload
            }
        }
    }
})

export const {addExercise, deleteExercise, updateExercise} = exercisesSlice.actions;

export default exercisesSlice.reducer;