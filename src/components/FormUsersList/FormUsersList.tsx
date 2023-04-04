import React, { FC } from 'react';
import FormUserCard from '../FormUserCard/FormUserCard';
import { RegistrationForm } from '../../pages/FormPage/FormPage';
import styles from './FormUsersList.module.scss';

type UsersListProps = {
  users: RegistrationForm[];
};

const FormUsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <FormUserCard user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default FormUsersList;
