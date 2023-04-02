import { FormNameTypes, Forms } from '../RegistrationUserForm/RegistrationUserForm';
import React, { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';

import styles from './Input.module.scss';

export interface InputProps {
  name: FormNameTypes;
  labelName: string;
  type: string;
  dataTestId?: string;
  placeholder?: string;
  register: UseFormRegister<Forms>;
  errors: FieldErrors<Forms>;
}

const Input: FC<InputProps> = ({
  name,
  register,
  errors,
  labelName,
  type,
  dataTestId,
  placeholder,
}) => {
  return (
    <label className={styles.label}>
      {labelName}
      <input
        type={type}
        className={styles.input}
        {...register(name, {
          required: `The ${name} is required`,
          pattern: {
            value: /^[A-ZА-Я]{1}[A-Za-zА-Яа-я\'\']*$/,
            message: `The ${name} is not start with a capital letter`,
          },
        })}
        placeholder={placeholder}
        data-testid={dataTestId}
      />
      {errors && <p className={styles.error}>{errors?.[name]?.message}</p>}
    </label>
  );
};

export default Input;
