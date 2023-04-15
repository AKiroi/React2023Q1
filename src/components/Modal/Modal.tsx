import React, { FC } from 'react';
import CardItem from '../CardItem/CardItem';

import styles from './Modal.module.scss';

type ModalProps = {
  setIsModal: (isModal: boolean) => void;
  cardId: number;
};

const Modal: FC<ModalProps> = ({ setIsModal, cardId }) => {
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className={styles.modal} onClick={closeModal} data-testid="modal">
      <div className={styles.background} />
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.btnClose} onClick={closeModal}>
          x
        </div>
        <div className={styles.content}>
          <CardItem cardId={cardId} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
