import React, { useState, useEffect } from 'react';

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

function App() {
  const [taskList, setTaskList] = useState<ITask[]>(() => {
    const storedList = localStorage.getItem("taskList");
    if (storedList) {
      return JSON.parse(storedList);
    } else {
      return [];
    }
  });
  
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  
  const deleteTask = (id: number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter(task => task.id !== id)
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if (modal) {
      if (display) {
        modal.classList.remove('hide');
      } else {
        modal.classList.add('hide');
      }
    }
  };

  const editTask = (task: ITask) => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, hour: string) => {
    const updatedTask = { id, title, hour };
    setTaskList((prevTaskList) => {
      const updatedItems = prevTaskList.map((task) => (task.id === updatedTask.id ? updatedTask : task));
      return updatedItems;
    });
    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal taskList={taskList} btnText="Editar Tarefa" >
        <TaskForm taskList={taskList} setTaskList={setTaskList} btnText='Editar Tarefa' task={taskToUpdate} handleUpdate={updateTask} />
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
  );
}

export default App;

