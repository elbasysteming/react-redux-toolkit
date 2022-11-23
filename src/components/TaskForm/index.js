import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { Label, Input, TextArea, Button } from "./styles.js";
import { addTask, editTask } from "../../features/tasks/tasksSlice";
import { closeModal } from "../../features/modal/modalSlice.js";

export const TaskForm = id => {
    const idTask = id.id;
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const [state, setState] = useState({
        error: false,
        loading: false,
        data: []
    });
    const { error, data } = state;

    useEffect(() => {
        function taskExists() {
            const task = tasks.find(element => element.id === idTask);
            if (task) {
                setState({ ...state, data: task });
            } else {
                setState({ ...state, data: [] });
            }
        }
        taskExists();
    }, [id]);

    const handleChange = e => {
        setState({
            ...state,
            data: { ...data, [e.target.name]: e.target.value }
        });
    };

    /* Funcion para editar o crear tarea dependiendo si el id existe o no */
    const handleSubmitForm = e => {
        try {
            e.preventDefault();
            if (idTask === null) {
                dispatch(
                    addTask({
                        ...data,
                        id: uuid()
                    })
                );
                dispatch(closeModal());
                toast("The task has been created 😎");
            } else {
                dispatch(editTask({ ...data, id: idTask }));
                dispatch(closeModal());
                toast("The task has been edited 😎");
            }
        } catch (error) {
            setState({ error: true });
        }
    };

    if (error) return <p> An error has occurred 😥 </p>;

    return (
        <div>
            <form onSubmit={(e) => handleSubmitForm(e)}>
                <Label> Title:</Label>
                <Input
                    type="text"
                    name="title"
                    value={data.title ?? ""}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <Label> Description: </Label>
                <TextArea
                    type="text"
                    name="description"
                    value={data.description ?? ""}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <Button type="submit" value="Submit">
                    {" "}
                    Save Changes{" "}
                </Button>
            </form>
        </div>
    );
};
