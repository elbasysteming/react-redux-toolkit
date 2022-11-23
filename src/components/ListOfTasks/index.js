import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { Item, Description, Container, Header, Opciones } from './styles'
import { completedTask, deleteTask, } from '../../features/tasks/tasksSlice';
import { openModal } from "../../features/modal/modalSlice";
import { MdDeleteOutline, MdOutlineCheckCircleOutline, MdMode } from '../../components/Icons';

export const ListOfTaks = () => {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);

    const handleClickComplete = (idTask) => {
        dispatch(completedTask({id: idTask}));
        toast("You completed the task😎");
    };

    const handleClickDelete = (idTask) => {
        dispatch(deleteTask({id: idTask}));
        toast("The task has been deleted 😎");
    };


    return (
        <div>
            <Container>
                <Header> My tasks </Header>
                <ul>
                    {
                        tasks.map((element) => {
                            return (
                                <Item key={element.id}>
                                    <div className="column-2">
                                        <h2 className={`${element.completed ? 'completed' : ''}`}> {element.title} </h2>
                                        <Opciones className={`${element.completed ? 'completed' : ''}`}>
                                            {
                                                !element.completed &&
                                                <button onClick={() => handleClickComplete(element.id)}  >
                                                    <MdOutlineCheckCircleOutline size='20px' color='#777777' />
                                                </button>}
                                            <button onClick={() => dispatch(openModal({ id: 'edit-task', title: 'Edit task', idTask: element.id }))} >
                                                <MdMode size='20px' color='#777777' />
                                            </button>
                                            <button onClick={() => handleClickDelete(element.id)} >
                                                <MdDeleteOutline size='20px' color='#777777' />
                                            </button>
                                        </Opciones>
                                    </div>
                                    <div>
                                        <Description> {element.description} </Description>
                                    </div>
                                </Item>

                            )

                        })
                    }
                    {

                        tasks.length < 1 && <li>
                            No tasks found 🤯
                        </li>
                    }

                </ul>

            </Container>
        </div>

    )

}