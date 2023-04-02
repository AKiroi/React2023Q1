import { FormNameTypes, Forms } from '../RegistrationUserForm/RegistrationUserForm';
import React, { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';

import styles from './Select.module.scss';

interface SelectProps {
  name: FormNameTypes;
  labelName: string;
  register: UseFormRegister<Forms>;
  errors: FieldErrors<Forms>;
}

const Select: FC<SelectProps> = ({ name, register, errors, labelName }) => {
  return (
    <label className={styles.label}>
      {labelName}
      <select
        {...register(name, {
          required: `The ${name} is require`,
        })}
        className={styles.select}
        defaultValue=""
      >
        <option disabled value="">
          Choose country
        </option>
        <option value="England">England</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Belarus">Belarus</option>
        <option value="Italy">Italy</option>
        <option value="Poland">Poland</option>
      </select>
      {errors && <p className={styles.error}>{errors?.[name]?.message}</p>}
    </label>
  );
};

export default Select;
