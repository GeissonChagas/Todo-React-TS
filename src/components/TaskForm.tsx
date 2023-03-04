import React from "react";

//Styles
import styles from './TaskForm.module.css'

interface Props{
    btnText: string
}


const TaskForm = ({btnText}: Props) => {
    return (
        <form className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Digite o título da tarefa"/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="horario">Horário:</label>
                <input type="time" name="horario" placeholder="Digite o horário da tarefa"/>
            </div>
            <div>
                <input type="submit" value={btnText} />
            </div>
        </form>
    )
}

export default TaskForm