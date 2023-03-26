import React from 'react';
import { RegistrationForm } from '../../pages/FormPage/FormPage';
import styles from './FormUserCard.module.scss';

interface FormUserCardProp {
  user: RegistrationForm;
}

export default class FormUserCard extends React.Component<FormUserCardProp> {
  render() {
    const { photo, firstName, lastName, birthday, country, } = this.props.user;
    return (
      <li className={styles.user}>
        {<img className={styles.photo} src={photo} alt="user photo" />}
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
          <span className={styles.name}>Country:</span> {country}
        </div>
      </li>
    );
  }
}