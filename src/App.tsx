import React, { useState } from 'react';

//components
import Footer from './components/Footer';
import Header from './components/Header';

//styles
import styles from './App.module.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//interface
import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState <ITask[]>([])

  return (
    <div>
      <Header />
      <main className={styles.app}>
        <div>
          <h2>O que pretende fazer?</h2>
          <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
