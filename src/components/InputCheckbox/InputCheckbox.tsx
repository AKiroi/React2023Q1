import { FormNameTypes, Forms } from '../RegistrationUserForm/RegistrationUserForm';
import React, { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';

import styles from './InputCheckbox.module.scss';

interface InputCheckboxProps {
  name: FormNameTypes;
  labelName: string;
  type: string;
  register: UseFormRegister<Forms>;
  errors: FieldErrors<Forms>;
}

const InputCheckbox: FC<InputCheckboxProps> = ({ name, register, errors, labelName, type }) => {
  return (
    <label className={styles.label}>
      <input
        {...register(name, {
          required: 'Field is require',
        })}
        type={type}
      />
      <span>{labelName}</span>
      {errors && <p className={styles.error}>{errors?.[name]?.message}</p>}
    </label>
  );
};

export default InputCheckbox;
