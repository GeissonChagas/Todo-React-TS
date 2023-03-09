import React from "react";

import { ITask } from '../interfaces/Task';

//CSS
import styles from '../components/Modal.module.css';

interface Props {
  children: React.ReactNode;
  taskList: ITask[];
  btnText: string;
}

const Modal = (props: Props) => {

  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector('#modal')
    modal!.classList.add("hide")
  }
  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        {props.children}
      </div>
    </div>
  )
}

export default Modal;
