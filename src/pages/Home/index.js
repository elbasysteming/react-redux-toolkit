import React from "react";
import { useDispatch } from "react-redux";
import { ListOfTaks } from "../../components/ListOfTasks";
import { openModal } from "../../features/modal/modalSlice";
import { CreateButton } from "./styles.js";

export const Home = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            openModal({
                id: "add-task",
                title: "Add new task",
                idTask: null
            })
        );
    };

    return (
        <div>
            <div className="container">
                <ListOfTaks />
                <CreateButton
                    type="button"
                    value="Submit"
                    onClick={() => handleClick()}>
                    +
                </CreateButton>
            </div>
        </div>
    );
};
