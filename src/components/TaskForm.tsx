import React, { useState, ChangeEvent, FormEvent } from "react";

//Styles
import styles from './TaskForm.module.css';

//interface
import { ITask } from '../interfaces/Task';

interface Props {
    btnText: string,
    taskList: ITask[],
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [hour, setHour] = useState<string>("");

    function addTaskHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const id = Math.floor(Math.random() * 1000)
        const newTask: ITask = {id, title, hour};

        setTaskList!([...taskList, newTask])

        setTitle("");
        setHour("");

        console.log(taskList)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        } else {
            const [hours, minutes] = e.target.value.split(':');
            const formattedHours = hours.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            setHour(`${formattedHours}:${formattedMinutes}`);
        }
    }    

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input 
                    type="text"
                    name="title" 
                    placeholder="Digite o título da tarefa"
                    onChange={handleChange}
                    value={title} 
                />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="hour">Horário:</label>
                <input 
                    type="time" 
                    name="hour" 
                    placeholder="Digite o horário da tarefa" 
                    onChange={handleChange}
                    value={hour} 
                />
            </div>
            <div>
                <input type="submit" value={btnText} />
            </div>
        </form>
    );
};


export default TaskForm;
