import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../store/taskReducer';
import TaskHolder from '../TaskHolder/TaskHolder';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoForm from '../TodoForm/TodoForm';
import s from "./Todo.module.sass"

export default function Todo() {
    const {tasks, canceled, done} = useSelector(state=>state.tasks);
    
    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();

        if (e.target.name.value === "" && e.target.note.value === "") {
            alert("Заполните хотя бы одно поле");
        } else {
        dispatch(addTask(e.target.name.value, e.target.note.value));
        }
        e.target.name.value = "";
        e.target.note.value = "";
    }

    

  return (
    <div className ={s.main}>
        <TodoHeader done={done} canceled={canceled} />
        <TodoForm handleForm={handleForm} />
       <TaskHolder tasks={tasks}/>
    </div>
  )
}
