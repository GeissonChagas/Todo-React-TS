import React from "react";

//interfaces
import {ITask} from '../interfaces/Task'

// CSS
import styles from './TaskList.module.css'
interface Props{
    taskList: ITask[];
}


const TaskList = ({ taskList }: Props) => {
    return (
        <div>
            <p>Lista de tarefas</p>
        </div>
    )
}

export default TaskList