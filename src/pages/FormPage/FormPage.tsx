import RegistrationUserForm from '../../components/RegistrationUserForm/RegistrationUserForm';
import FormUsersList from '../../components/FormUsersList/FormUsersList';
import React from 'react';

import styles from './FormPage.module.scss';

const FormPage = () => {
  return (
    <div className={styles.formPage} data-testid="formPage">
      <div className={styles.container}>
        <div className={styles.title}>Registration form</div>
        <RegistrationUserForm />
        <FormUsersList />
      </div>
    </div>
  );
};

export default FormPage;
