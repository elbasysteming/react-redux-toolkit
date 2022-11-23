import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: "1",
            title: "Desayunar",
            description: "Hacer Arepas",
            completed: true
        },
        {
            id: "2",
            title: "Hacer Ejercicios",
            description: "Practicar Yoga",
            completed: false
        }
    ]
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { id } = action.payload;
            const taskExists = state.tasks.some(element => element.id === id);
            if (!taskExists) {
                state.tasks.push(action.payload);
            }
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const task = state.tasks.find(element => element.id === id);
            if (task) {
                task.title = title;
                task.description = description;
            }
        },
        completedTask: (state, action) => {
            const { id } = action.payload;
            const task = state.tasks.find(element => element.id === id);
            if (task) {
                task.completed = true;
            }
        },
        deleteTask: (state, action) => {
            const { id } = action.payload;
            const taskId = state.tasks.find(element => element.id === id);
            if (taskId) {
                state.tasks.splice(state.tasks.indexOf(taskId), 1);
            }
        }
    }
});

export const tasks = state => state.tasks;

export const { addTask, editTask, completedTask, deleteTask } =
    tasksSlice.actions;

export default tasksSlice.reducer;
