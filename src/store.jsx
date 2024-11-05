import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from './features/exercisesSlice';

export const store = configureStore({
    reducer: {
        exercises: exercisesReducer
    }
})