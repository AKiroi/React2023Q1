import React from 'react';

import styles from './Modal.module.scss';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.background} />
      <div className={styles.container}>
        <div className={styles.btnClose}>x</div>
        <div className={styles.content}>Card</div>
      </div>
    </div>
  );
};

export default Modal;
