import React from 'react';
import s from "./TodoHeader.module.sass";

export default function TodoHeader({done, canceled}) {
  return (
    <div className={s.result}>
            <div className={s.done}>
                <p>Сделано </p>
                <p id="done_num">{done}</p>
            </div>
            <div className={s.canceled}>
                <p>Отменено </p>
                <p id="canceled_num">{canceled}</p>
            </div>
        </div>

  )
}
