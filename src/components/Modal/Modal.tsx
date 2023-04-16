import React, { FC } from 'react';
import { useGetCardByIdQuery } from '../../services/cardsApi';
import CardItem from '../CardItem/CardItem';
import Loader from '../Loader/Loader';

import styles from './Modal.module.scss';

type ModalProps = {
  setIsModal: (isModal: boolean) => void;
  cardId: number;
};

const Modal: FC<ModalProps> = ({ setIsModal, cardId }) => {
  const { data: cardItem, error, isFetching } = useGetCardByIdQuery(cardId);
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      {isFetching && <Loader />}
      {!isFetching && !error && cardItem && (
        <div className={styles.modal} onClick={closeModal} data-testid="modal">
          <div className={styles.background} />
          <div className={styles.container} onClick={(e) => e.stopPropagation()}>
            <button className={styles.btnClose} onClick={closeModal}>
              x
            </button>
            <div className={styles.content}>
              <CardItem cardItem={cardItem} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
