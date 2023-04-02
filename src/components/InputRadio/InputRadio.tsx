import { FormNameTypes, Forms } from '../RegistrationUserForm/RegistrationUserForm';
import React, { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';

import styles from './InputRadio.module.scss';

interface InputRadioProps {
  name: FormNameTypes;
  labelName: string;
  type: string;
  register: UseFormRegister<Forms>;
  errors: FieldErrors<Forms>;
}

const InputRadio: FC<InputRadioProps> = ({ name, register, errors, labelName, type }) => {
  return (
    <div className={styles.radioContainer}>
      <span>{labelName}</span>
      <label className={styles.radioLabel}>
        male{' '}
        <input
          className={styles.input}
          {...register(name, {
            required: 'Field is require',
          })}
          type={type}
          value="male"
          name={name}
        />
      </label>

      <label className={styles.radioLabel}>
        female{' '}
        <input
          className={styles.input}
          {...register(name, {
            required: 'Field is require',
          })}
          value="female"
          type={type}
          name={name}
        />
      </label>
      {errors && <p className={styles.error}>{errors?.[name]?.message}</p>}
    </div>
  );
};

export default InputRadio;
