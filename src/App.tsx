import React from 'react';

//components
import Footer from './components/Footer';
import Header from './components/Header';

//styles
import styles from './App.module.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
  return (
    <div>
      <Header />
      <main className={styles.app}>
        <div>
          <h2>O que pretende fazer?</h2>
          <TaskForm btnText='Criar Tarefa' />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
