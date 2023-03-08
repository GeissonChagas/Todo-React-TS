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
       <>
            {taskList.length > 0 ? (
                taskList.map((task) =>
                <div key={task.id}>
                    <div>
                        <h4>{task.title}</h4>
                        <p>Horário: {task.hour} </p>
                    </div>
                    <div>
                        <i className="bi bi-pencil"></i>
                        <i className="bi bi-trash"></i>
                    </div>
                </div>)
            ) : (
                <p>Não há tarefas cadastradas!</p>
            )}
       </>
    )
}

export default TaskList