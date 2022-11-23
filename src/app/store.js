import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        modal: modalReducer
    }
});
