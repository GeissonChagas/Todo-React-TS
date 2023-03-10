import React, { useState } from 'react';

//components
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//styles
import styles from './App.module.css'

//interface
import { ITask } from './interfaces/Task';

interface Props {
  taskList: ITask[];
  btnText: string;
  handleEdit: (task: ITask) => void;
  handleDelete: (id: number) => void;
}


function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)


  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if (display) {
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add('hide');
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }



  return (
    <div>
      <Modal taskList={taskList} btnText="Editar Tarefa" >
        <TaskForm taskList={taskList} setTaskList={setTaskList} btnText='Criar Tarefa'  task={taskToUpdate}/>
      </Modal>
      <Header />
      <main className={styles.app}>
        <div>
          <h2>O que pretende fazer?</h2>
          <TaskForm taskList={taskList} setTaskList={setTaskList} btnText='Criar Tarefa'  />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
