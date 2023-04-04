import React, { FC } from 'react';
import { RegistrationForm } from '../../pages/FormPage/FormPage';
import styles from './FormUserCard.module.scss';

type FormUserCardProp = {
  user: RegistrationForm;
};

const FormUserCard: FC<FormUserCardProp> = ({ user }) => {
  const { photo, firstName, lastName, birthday, country, gender } = user;
  return (
    <li className={styles.user} data-testid="user">
      <img className={styles.photo} src={photo} alt="user photo" />
      <div className={styles.col}>
        <span className={styles.name}>First name:</span> {firstName}
      </div>
      <div className={styles.col}>
        <span className={styles.name}>Last name:</span> {lastName}
      </div>
      <div className={styles.col}>
        <span className={styles.name}>Birthday:</span> {birthday}
      </div>
      <div className={styles.col}>
        <span className={styles.name}>Gender:</span> {gender}
      </div>
      <div className={styles.col}>
        <span className={styles.name}>Country:</span> {country}
      </div>
    </li>
  );
};

export default FormUserCard;
