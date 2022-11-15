import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, taskStatusCanceled, taskStatusDone } from '../../store/taskReducer';
import nothing from "../../media/nothing.png";
import s from "./TaskHolder.module.sass";

export default function TaskHolder({tasks}) {
    const dispatch = useDispatch();
    
    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    }
    
    const toggleDoneClass = (id) => {
        dispatch(taskStatusDone(id))
    };

    const toggleCanceledClass = (id) => {
        dispatch(taskStatusCanceled(id))
    };

  return (
    <div className={s.task_holder} >
    {
        (tasks.length === 0) ? 
            <img src={nothing} alt="pic" /> :
            tasks.map((task) => 
                <div className={s.task} key={task.id} onDoubleClick={()=>handleDeleteTask(task.id)}>
                    <div className={s.task_info}>
                        <p className={s.task_name}>{task.name}</p>
                        <p className={s.task_note}>{task.note}</p>
                    </div>
                    <div className={s.task_checked}>
                        <div className={task.status === "done"? s.d_active : s.done} onClick={()=>toggleDoneClass(task.id)}></div>
                        <div className={task.status === "canceled" ? s.c_active : s.canceled}  onClick={()=>toggleCanceledClass(task.id)}></div>
                    </div>
                </div>
        )
    }
        
    </div>
  )
}
