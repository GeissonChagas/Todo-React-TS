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
  return (
    <>
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        {props.children}
      </div>
    </>
  )
}

export default Modal;
