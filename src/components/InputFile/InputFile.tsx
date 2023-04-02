import { FormNameTypes, Forms } from '../RegistrationUserForm/RegistrationUserForm';
import React, { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';

import styles from './InputFile.module.scss';

interface InputFileProps {
  name: FormNameTypes;
  labelName: string;
  type: string;
  register: UseFormRegister<Forms>;
  errors: FieldErrors<Forms>;
}

const InputFile: FC<InputFileProps> = ({ name, register, errors, labelName, type }) => {
  return (
    <label className={styles.label}>
      {labelName}
      <input
        {...register(name, {
          required: `The ${name} is required`,
        })}
        className={styles.photo}
        type={type}
        accept=".jpg, .jpeg, .png"
      />
      {errors && <p className={styles.error}>{errors?.[name]?.message}</p>}
    </label>
  );
};

export default InputFile;
