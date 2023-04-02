import RegistrationUserForm from '../../components/RegistrationUserForm/RegistrationUserForm';
import FormUsersList from '../../components/FormUsersList/FormUsersList';
import React, { useState } from 'react';

import styles from './FormPage.module.scss';

export interface RegistrationForm {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  country: string;
  photo: string;
  check: boolean;
}

const FormPage = () => {
  const [users, setUsers] = useState<RegistrationForm[]>([]);

  const addUser = (user: RegistrationForm) => {
    setUsers([...users, user]);
  };

  return (
    <div className={styles.formPage}>
      <div className={styles.container}>
        <div className={styles.title}>Registration form</div>
        <RegistrationUserForm addUser={addUser} />
        <FormUsersList users={users} />
      </div>
    </div>
  );
};

export default FormPage;
