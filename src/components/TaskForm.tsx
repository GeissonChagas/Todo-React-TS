import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Styles
import styles from "./TaskForm.module.css";

// Interfaces
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, hour:string): void;
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [hour, setHour] = useState<string>("");

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setHour(task.hour);
    }
  }, [task]);

  function addTaskHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (handleUpdate){
        handleUpdate(id, title, hour);
    } else {
        const id = Math.floor(Math.random() * 1000);
        const newTask: ITask = { id, title, hour };

        setTaskList([...taskList, newTask]);

        setTitle("");
        setHour("");
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      const [hours, minutes] = e.target.value.split(":");
      const formattedHours = hours.padStart(2, "0");
      const formattedMinutes = minutes.padStart(2, "0");
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
          required
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
          required
        />
      </div>
      <div>
        <input type="submit" value={btnText} />
      </div>
    </form>
  );
};

export default TaskForm;


