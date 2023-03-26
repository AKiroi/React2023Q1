import React from 'react';
import FormUserCard from '../FormUserCard/FormUserCard';
import { RegistrationForm } from '../../pages/FormPage/FormPage';
import styles from './FormUsersList.module.scss';

export default class FormUsersList extends React.Component<{ users: RegistrationForm[] }> {
  render(): React.ReactNode {
    return (
      <div className={styles.list}>
        {this.props.users.map((user) => (
          <FormUserCard user={user} key={user.id} />
        ))}
      </div>
    );
  }
}