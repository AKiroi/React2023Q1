import { FormNameTypes, Forms } from '../RegistrationUserForm/RegistrationUserForm';
import React, { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';

import styles from './Input.module.scss';

export interface InputProps {
  nameValue: FormNameTypes;
  labelName: string;
  type: string;
  dataTestId?: string;
  placeholder?: string;
  register: UseFormRegister<Forms>;
  errors: FieldErrors<Forms>;
}

const Input: FC<InputProps> = ({
  nameValue,
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
        {...register(nameValue, {
          required: `The ${nameValue} is required`,
          pattern: {
            value: /^[A-ZА-Я]{1}[A-Za-zА-Яа-я\'\']*$/,
            message: `The ${nameValue} is not start with a capital letter`,
          },
        })}
        className={styles.input}
        name={nameValue}
        placeholder={placeholder}
        data-testid={dataTestId}
      />
      {errors && <p className={styles.error}>{errors?.[nameValue]?.message}</p>}
    </label>
  );
};

export default Input;
