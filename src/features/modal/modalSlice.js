import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: { id: null, title: null, idTask: null }
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,

    reducers: {
        openModal: (state, action) => {
            state.modal = {
                id: action.payload.id,
                title: action.payload.title,
                idTask: action.payload.idTask
            };
        },
        closeModal: state => {
            state.modal = { id: null, title: null, idTask: null };
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
