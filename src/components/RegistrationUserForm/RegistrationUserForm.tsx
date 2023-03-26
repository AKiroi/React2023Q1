

import React from 'react';
import { RegistrationForm } from '../../pages/FormPage/FormPage';
import styles from './RegistrationUserForm.module.scss';

type RegistrationFormProps = {
  addUser: (user: RegistrationForm) => void;
};

export default class RegistrationUserForm extends React.Component<RegistrationFormProps> {

  constructor(props: RegistrationFormProps) {
    super(props);
  }

  render() {
    return(
      <div>RegistrationFormProps</div>
    )
  }
}