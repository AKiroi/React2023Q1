import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
import InputDate from '../InputDate/InputDate';
import InputRadio from '../InputRadio/InputRadio';
import InputFile from '../InputFile/InputFile';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import Select from '../Select/Select';
import { RegistrationForm } from '../../pages/FormPage/FormPage';
import styles from './RegistrationUserForm.module.scss';

type RegistrationFormProps = {
  addUser: (user: RegistrationForm) => void;
};
export type FormNameTypes =
  | 'firstName'
  | 'lastName'
  | 'birthday'
  | 'gender'
  | 'country'
  | 'photo'
  | 'check';

export type Forms = {
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  country: string;
  photo: FileList;
  check?: boolean;
};

const RegistrationUserForm: FC<RegistrationFormProps> = ({ addUser }) => {
  const [isAddUser, setIsAddUser] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Forms>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit = (data: object) => {
    const { firstName, lastName, country, birthday, gender, check, photo: files } = data as Forms;
    if (files && check) {
      const id = Date.now().toString();
      const photo = URL.createObjectURL(files[0]);
      addUser({ id, firstName, lastName, country, birthday, gender, photo, check });
    }
    reset();
    setIsAddUser(true);
    setTimeout(() => {
      setIsAddUser(false);
    }, 5000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <Input
          name="firstName"
          labelName="Your first name:"
          type="text"
          register={register}
          errors={errors}
          placeholder="first name"
          dataTestId="first-name"
          data-testid="first-name"
        />
        <Input
          name="lastName"
          labelName="Your last name:"
          type="text"
          register={register}
          errors={errors}
          placeholder="last name"
          dataTestId="last-name"
        />
        <InputDate
          name="birthday"
          labelName="Your birthday:"
          type="date"
          register={register}
          errors={errors}
        />
        <Select name="country" labelName="Country:" register={register} errors={errors} />
        <InputRadio
          name="gender"
          type="radio"
          labelName="Gender:"
          register={register}
          errors={errors}
        />
        <InputFile
          name="photo"
          labelName="Add photo:"
          type="file"
          register={register}
          errors={errors}
        />
        <InputCheckbox
          name="check"
          labelName="I consent to my personal data"
          type="checkbox"
          register={register}
          errors={errors}
        />

        <button className={styles.button}>Submit</button>

        {isAddUser && <div>Add user</div>}
      </div>
    </form>
  );
};

export default RegistrationUserForm;
