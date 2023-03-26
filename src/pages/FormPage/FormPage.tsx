import RegistrationUserForm from '../../components/RegistrationUserForm/RegistrationUserForm';
import React from 'react';

import styles from './FormPage.module.scss';

export interface RegistrationForm {
  firstName: string;
  lastName: string;
  birthday: string;
  sex: string;
  country: string;
  photo: string;
}

export default class FormPage extends React.Component {
  state: { users: RegistrationForm[] } = { users: [] };

  addUser= (user: RegistrationForm) => {
    this.setState({ users: [...this.state.users, user] });
  };
  render() {
    return (
      <div className={styles.form}>
        <div className={styles.container}>
          <div>Registration form</div>
          <RegistrationUserForm addUser={this.addUser} />
        </div>
      </div>
    );
  }
}
