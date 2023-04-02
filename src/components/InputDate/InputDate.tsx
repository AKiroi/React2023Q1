import { FormNameTypes, Forms } from '../RegistrationUserForm/RegistrationUserForm';
import React, { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';

import styles from './InputDate.module.scss';

interface InputProps {
  name: FormNameTypes;
  labelName: string;
  type: string;
  register: UseFormRegister<Forms>;
  errors: FieldErrors<Forms>;
}

const InputDate: FC<InputProps> = ({ name, register, errors, labelName, type }) => {
  return (
    <label className={styles.label}>
      {labelName}
      <input
        type={type}
        className={styles.input}
        {...register(name, {
          required: `The ${name} is require`,
        })}
      />
      {errors && <p className={styles.error}>{errors?.[name]?.message}</p>}
    </label>
  );
};

export default InputDate;
