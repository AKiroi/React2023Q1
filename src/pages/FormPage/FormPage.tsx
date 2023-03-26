import RegistrationUserForm from '../../components/RegistrationUserForm/RegistrationUserForm';
import FormUsersList from '../../components/FormUsersList/FormUsersList';
import React from 'react';

import styles from './FormPage.module.scss';

export interface RegistrationForm {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  sex: string;
  country: string;
  photo: string;
}

export default class FormPage extends React.Component {
  state: { users: RegistrationForm[] } = { users: [] };

  addUser = (user: RegistrationForm) => {
    console.log(user);
    this.setState({ users: [...this.state.users, user] });
  };
  render() {
    return (
      <div className={styles.form}>
        <div className={styles.container}>
          <div>Registration form</div>
          <RegistrationUserForm addUser={this.addUser} />
          <FormUsersList users={this.state.users} />
        </div>
      </div>
    );
  }
}
