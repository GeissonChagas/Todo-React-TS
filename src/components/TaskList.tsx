import React from "react";

//interfaces
import {ITask} from '../interfaces/Task'

// CSS
import styles from '../components/TaskList.module.css'

interface Props{
    taskList: ITask[];
}


const TaskList = ({ taskList }: Props) => {
    return (
      <div className="task-list">
        {taskList.length > 0 ? (
          taskList.map((task) => (
            <div className={styles["task-item"]} key={task.id}>
                <div>
                    <h4 className={styles["task-title"]}>{task.title}</h4>
                    <p className={styles["task-time"]}>Horário: {task.hour} </p>
                </div>
                <div className={styles["task-icons"]}>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash"></i>
                </div>
            </div>
          ))
        ) : (
          <p>Não há tarefas cadastradas!</p>
        )}
      </div>
    );
  };
  

export default TaskList