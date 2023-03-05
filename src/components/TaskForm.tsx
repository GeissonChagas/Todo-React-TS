import React, { useState, ChangeEvent, FormEvent } from "react";

//Styles
import styles from './TaskForm.module.css';

//interface
import { ITask } from '../interfaces/Task';

interface Props {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [hour, setHour] = useState<number>(0);

    function addTaskHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(title, hour);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        } else {
            setHour(parseInt(e.target.value));
        }
        console.log(title);
        console.log(hour);
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Digite o título da tarefa" onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="hour">Horário:</label>
                <input type="time" name="hour" placeholder="Digite o horário da tarefa" onChange={handleChange} />
            </div>
            <div>
                <input type="submit" value={btnText} />
            </div>
        </form>
    );
};

export default TaskForm;
