import React from 'react';
import { RegistrationForm } from '../../pages/FormPage/FormPage';
import styles from './FormUserCard.module.scss';

type FormUserCardProp = {
  user: RegistrationForm;
};

export default class FormUserCard extends React.Component<FormUserCardProp> {
  render() {
    const { photo, firstName, lastName, birthday, country, sex } = this.props.user;
    return (
      <li className={styles.user}>
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
          <span className={styles.name}>Gender:</span> {sex}
        </div>
        <div className={styles.col}>
          <span className={styles.name}>Country:</span> {country}
        </div>
      </li>
    );
  }
}
