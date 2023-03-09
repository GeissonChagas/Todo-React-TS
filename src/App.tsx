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
}

function App() {

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    )
  }

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
      <Modal taskList={taskList} btnText="Editar Tarefa">
        <TaskForm taskList={taskList} setTaskList={setTaskList} btnText='Criar Tarefa' />
      </Modal>
      <Header />
      <main className={styles.app}>
        <div>
          <h2>O que pretende fazer?</h2>
          <TaskForm taskList={taskList} setTaskList={setTaskList} btnText='Criar Tarefa' />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
