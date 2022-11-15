import React from 'react';
import s from "./TodoForm.module.sass";

export default function TodoForm({handleForm}) {
    return (
    <form className={s.form} onSubmit={handleForm}>
                <label >Добавить новое дело</label>
                <input type="text" placeholder="Название" name="name"/>
                <input type="text" placeholder="Пометки" name="note"/>
                <button>добавить</button>
    </form>
  )
}
