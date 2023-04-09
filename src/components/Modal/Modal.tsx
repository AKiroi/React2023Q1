import React, { FC } from 'react';

import styles from './Modal.module.scss';

type ModalProps  = {
  setIsModal: (isModal: boolean) => void;
}

const Modal: FC<ModalProps> = ({ setIsModal }) => {
  const closeModal = () => {
    setIsModal(false);
  }

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.background} />
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.btnClose} onClick={closeModal}>x</div>
        <div className={styles.content}>Card</div>
      </div>
    </div>
  );
};

export default Modal;
