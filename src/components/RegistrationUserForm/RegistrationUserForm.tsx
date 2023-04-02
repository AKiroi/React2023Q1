import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
import InputDate from '../InputDate/InputDate';
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
  | 'sex'
  | 'country'
  | 'photo'
  | 'check';

export type Forms = {
  firstName: string;
  lastName: string;
  birthday: string;
  sex: string;
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
  } = useForm<Forms>();

  const onSubmit = (data: object) => {
    const { firstName, lastName, country, birthday, sex, check, photo: files } = data as Forms;
    if (files && check) {
      const id = Date.now().toString();
      const photo = URL.createObjectURL(files[0]);
      addUser({ id, firstName, lastName, country, birthday, sex, photo, check });
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
        <Select 
         name="country"
         labelName="Country:"
         register={register}
         errors={errors}
        />
        {/*<label className={styles.label}>
          Your first name:{' '}
          <input
            className={styles.input}
            {...register('firstName', {
              required: 'Field is require',
              pattern: {
                value: /^[A-ZА-Я]{1}[A-Za-zА-Яа-я\'\']*$/,
                message: 'upper',
              },
            })}
            type="text"
            placeholder="first name"
            data-testid="first-name"
          />
          {errors?.firstName && <p className={styles.error}>{errors.firstName?.message}</p>}
        </label>*/}

        {/*<label className={styles.label}>
          Your last name:{' '}
          <input
            className={styles.input}
            {...register('lastName', {
              required: 'Field is require',
            })}
            type="text"
            placeholder="last name"
            data-testid="last-name"
          />
          {errors?.firstName && <p className={styles.error}>{errors.lastName?.message}</p>}
        </label>*/}

        {/*<label className={styles.label}>
          Your birthday:{' '}
          <input
            className={styles.date}
            type="date"
            {...register('birthday', {
              required: 'Field is require',
            })}
            data-testid="form-date"
          />
          {errors?.birthday && <p className={styles.error}>{errors.birthday?.message}</p>}
        </label>*/}

        {/*<label className={styles.label}>
          Country:{' '}
          <select
            {...register('country', {
              required: 'Field is require',
            })}
            className={styles.select}
            defaultValue=""
          >
            <option disabled value="">
              Choose country
            </option>
            <option value="England">England</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Poland">Poland</option>
          </select>
          {errors?.country && <p className={styles.error}>{errors.country?.message}</p>}
        </label>*/}

        <div className={styles.radioContainer}>
          <span>Gender: </span>
          <label className={styles.radioLabel}>
            male{' '}
            <input
              {...register('sex', {
                required: 'Field is require',
              })}
              type="radio"
              value="male"
              name="sex"
            />
          </label>

          <label className={styles.radioLabel}>
            female{' '}
            <input
              {...register('sex', {
                required: 'Field is require',
              })}
              value="female"
              type="radio"
              name="sex"
            />
          </label>
          {errors?.sex && <p className={styles.error}>{errors.sex?.message}</p>}
        </div>

        <label className={styles.label}>
          Add photo:
          <input
            {...register('photo', {
              required: 'Field is require',
            })}
            className={styles.photo}
            type="file"
            accept=".jpg, .jpeg, .png"
          />
          {errors?.photo && <p className={styles.error}>{errors.photo?.message}</p>}
        </label>

        <label className={styles.label}>
          I consent to my personal data:
          <input
            {...register('check', {
              required: 'Field is require',
            })}
            type="checkbox"
          />
          {errors?.check && <p className={styles.error}>{errors.check?.message}</p>}
        </label>

        <button className={styles.button}>Submit</button>

        {isAddUser && <div>Add user</div>}
      </div>
    </form>
  );
};

export default RegistrationUserForm;

//export default class RegistrationUserForm extends React.Component<
//  RegistrationFormProps,
//  RegistrationFormState
//> {
//  firstName: React.RefObject<HTMLInputElement>;
//  lastName: React.RefObject<HTMLInputElement>;
//  country: React.RefObject<HTMLSelectElement>;
//  birthday: React.RefObject<HTMLInputElement>;
//  sexMale: React.RefObject<HTMLInputElement>;
//  sexFemale: React.RefObject<HTMLInputElement>;
//  photo: React.RefObject<HTMLInputElement>;
//  checkbox: React.RefObject<HTMLInputElement>;
//  form: React.RefObject<HTMLFormElement>;
//  constructor(props: RegistrationFormProps) {
//    super(props);
//    this.firstName = React.createRef();
//    this.lastName = React.createRef();
//    this.country = React.createRef();
//    this.birthday = React.createRef();
//    this.sexMale = React.createRef();
//    this.sexFemale = React.createRef();
//    this.photo = React.createRef();
//    this.checkbox = React.createRef();
//    this.form = React.createRef();
//    this.state = {
//      errors: {
//        firstName: '',
//        lastName: '',
//        country: '',
//        birthday: '',
//        sex: '',
//        photo: '',
//        checkbox: false,
//      },
//      isAddUser: false,
//    };
//  }

//  validatedForm() {
//    const errors: Record<string, string | boolean> = {};

//    if (!this.firstName.current?.value) {
//      errors['firstName'] = 'The first name is required';
//    } else {
//      if (this.firstName.current?.value[0] !== this.firstName.current?.value[0].toUpperCase()) {
//        errors['firstName'] = 'The first name is not start with a capital letter';
//      }
//    }

//    if (!this.lastName.current?.value) {
//      errors['lastName'] = 'The last name is required';
//    } else {
//      if (this.lastName.current?.value[0] !== this.lastName.current?.value[0].toUpperCase()) {
//        errors['lastName'] = 'The last name is not start with a capital letter';
//      }
//    }
//    if (!this.birthday.current?.value) {
//      errors['birthday'] = 'The date is required';
//    } else if (Date.parse(this.birthday.current?.value) > Date.now()) {
//      errors['birthday'] = 'Invalid date';
//    }
//    if (!this.country.current?.value) {
//      errors['country'] = 'The country is required';
//    }
//    if (!this.sexMale.current?.checked && !this.sexFemale.current?.checked) {
//      errors['sex'] = 'This field is required';
//    }
//    if (this.photo.current?.files?.length === 0) {
//      errors['photo'] = 'The photo is required';
//    }
//    if (!this.checkbox.current?.checked) {
//      errors['checkbox'] = 'This field is required';
//    }

//    return errors;
//  }

//  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//    e.preventDefault();

//    const errors = this.validatedForm();

//    if (Object.keys(errors).length !== 0) {
//      this.setState({ errors });
//      return;
//    }
//    const id = Date.now().toString();
//    const firstName = this.firstName.current?.value;
//    const lastName = this.lastName.current?.value;
//    const birthday = this.birthday.current?.value;
//    const sex = this.sexMale.current?.checked ? 'male' : 'female';
//    const country = this.country.current?.value;
//    const files = this.photo.current?.files;

//    if (files && firstName && lastName && birthday && country) {
//      const photo = URL.createObjectURL(files[0]);
//      this.props.addUser({ id, firstName, lastName, birthday, sex, country, photo });
//    }

//    this.setState({ errors: {} });
//    this.setState({ isAddUser: true });
//    setTimeout(() => {
//      this.setState({ isAddUser: false });
//    }, 5000);
//    this.form.current?.reset();
//  };

//  render() {
//    return (
//      <form className={styles.form} onSubmit={this.handleSubmit} ref={this.form}>
//        <div className={styles.container}>
//          <label className={styles.label}>
//            Your first name:{' '}
//            <input
//              ref={this.firstName}
//              className={styles.input}
//              type="text"
//              placeholder="first name"
//              data-testid="first-name"
//            />
//            {this.state.errors.firstName && (
//              <p className={styles.error}>{this.state.errors.firstName}</p>
//            )}
//          </label>

//          <label className={styles.label}>
//            Your last name:{' '}
//            <input
//              ref={this.lastName}
//              className={styles.input}
//              type="text"
//              placeholder="last name"
//            />
//            {this.state.errors.lastName && (
//              <p className={styles.error}>{this.state.errors.lastName}</p>
//            )}
//          </label>

//          <label className={styles.label}>
//            Your birthday:{' '}
//            <input
//              ref={this.birthday}
//              className={styles.date}
//              type="date"
//              data-testid="form-date"
//            />
//            {this.state.errors.birthday && (
//              <p className={styles.error}>{this.state.errors.birthday}</p>
//            )}
//          </label>

//          <label className={styles.label}>
//            Country:{' '}
//            <select ref={this.country} className={styles.select} defaultValue="">
//              <option disabled value="">
//                Choose country
//              </option>
//              <option value="England">England</option>
//              <option value="Ukraine">Ukraine</option>
//              <option value="Poland">Poland</option>
//            </select>
//            {this.state.errors.country && (
//              <p className={styles.error}>{this.state.errors.country}</p>
//            )}
//          </label>

//          <div className={styles.radioContainer}>
//            <span>Gender: </span>
//            <label className={styles.radioLabel}>
//              male <input ref={this.sexMale} type="radio" name="sex" />
//            </label>

//            <label className={styles.radioLabel}>
//              female <input ref={this.sexFemale} type="radio" name="sex" />
//            </label>
//            {this.state.errors.sex && <p className={styles.error}>{this.state.errors.sex}</p>}
//          </div>

//          <label className={styles.label}>
//            Add photo:
//            <input
//              ref={this.photo}
//              className={styles.photo}
//              type="file"
//              accept=".jpg, .jpeg, .png"
//            />
//            {this.state.errors.photo && <p className={styles.error}>{this.state.errors.photo}</p>}
//          </label>

//          <label className={styles.label}>
//            I consent to my personal data: <input ref={this.checkbox} type="checkbox" />
//            {this.state.errors.checkbox && (
//              <p className={styles.error}>{this.state.errors.checkbox}</p>
//            )}
//          </label>

//          <button className={styles.button}>Submit</button>

//          {this.state.isAddUser && <div>Add user</div>}
//        </div>
//      </form>
//    );
//  }
//}
