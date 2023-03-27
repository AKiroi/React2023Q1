import React from 'react';
import { RegistrationForm } from '../../pages/FormPage/FormPage';
import styles from './RegistrationUserForm.module.scss';

type RegistrationFormProps = {
  addUser: (user: RegistrationForm) => void;
};
type RegistrationFormState =  {
  errors: Record<string, string | boolean>;
  isAddUsers : boolean;
}

export default class RegistrationUserForm extends React.Component<
  RegistrationFormProps,
  RegistrationFormState
> {
  firstName: React.RefObject<HTMLInputElement>;
  lastName: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  birthday: React.RefObject<HTMLInputElement>;
  sexMale: React.RefObject<HTMLInputElement>;
  sexFemale: React.RefObject<HTMLInputElement>;
  photo: React.RefObject<HTMLInputElement>;
  checkbox: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;
  constructor(props: RegistrationFormProps) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.country = React.createRef();
    this.birthday = React.createRef();
    this.sexMale = React.createRef();
    this.sexFemale = React.createRef();
    this.photo = React.createRef();
    this.checkbox = React.createRef();
    this.form = React.createRef();
    this.state = {
      errors: {
        firstName: '',
        lastName: '',
        country: '',
        birthday: '',
        sex: '',
        photo: '',
        checkbox: false,
      },
      isAddUsers: false,
    };
  }

  validatedForm() {
    const errors: Record<string, string | boolean>= {};

    if (!this.firstName.current?.value) {
      errors['firstName'] = 'This field is required';
    } else {
      if (this.firstName.current?.value[0] !== this.firstName.current?.value[0].toUpperCase()) {
        errors['firstName'] = 'The first name is not start with a capital letter';
      }
    }
    
    if (!this.lastName.current?.value) {
      errors['lastName'] = 'This field is required';
    } else {
      if (this.lastName.current?.value[0] !== this.lastName.current?.value[0].toUpperCase()) {
        errors['lastName'] = 'The last name is not start with a capital letter';
      }
    }
    if (!this.birthday.current?.value) {
      errors['birthday'] = 'This field is required';
    } else if (Date.parse(this.birthday.current?.value) > Date.now()) {
      errors['birthday'] = 'Invalid date';
    }
    if (!this.country.current?.value) {
      errors['country'] = 'The country is required';
    }
    if (!this.sexMale.current?.checked && !this.sexFemale.current?.checked) {
      errors['sex'] = 'This field is required';
    }
    if (this.photo.current?.files?.length === 0) {
      errors['photo'] = 'The photo is required';
    }
    if (!this.checkbox.current?.checked) {
      errors['checkbox'] = 'This field is required';
    }

    return errors;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = this.validatedForm();

    if (Object.keys(errors).length !== 0) {
      this.setState({ errors });
      return;
    }
    const id = Date.now().toString();
    const firstName = this.firstName.current?.value;
    const lastName = this.lastName.current?.value;
    const birthday = this.birthday.current?.value;
    const sex = this.sexMale.current?.checked ? 'male' : 'female';
    const country = this.country.current?.value;
    const files = this.photo.current?.files;

    if (files && firstName && lastName && birthday && country) {
      const photo = URL.createObjectURL(files[0]);
      this.props.addUser({ id, firstName, lastName, birthday, sex, country, photo });
    }

    this.setState({errors: {}});
    this.setState({ isAddUsers: true });
    setTimeout(() => {
      this.setState({ isAddUsers: false });
    }, 3000);
    this.form.current?.reset();
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit} ref={this.form}>
        <div className={styles.container}>
          <label className={styles.label}>
            Your first name:{' '}
            <input
              ref={this.firstName}
              className={styles.input}
              type="text"
              placeholder="first name"
            />
            {this.state.errors.firstName && (
              <p className={styles.error}>{this.state.errors.firstName}</p>
            )}
          </label>

          <label className={styles.label}>
            Your last name:{' '}
            <input
              ref={this.lastName}
              className={styles.input}
              type="text"
              placeholder="last name"
            />
            {this.state.errors.lastName && (
              <p className={styles.error}>{this.state.errors.lastName}</p>
            )}
          </label>

          <label className={styles.label}>
            Your birthday: <input ref={this.birthday} className={styles.date} type="date" />
            {this.state.errors.birthday && (
              <p className={styles.error}>{this.state.errors.birthday}</p>
            )}
          </label>

          <label className={styles.label}>
            Country:{' '}
            <select ref={this.country} className={styles.select} defaultValue="">
              <option disabled value="">
                Choose country
              </option>
              <option value="England">England</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Poland">Poland</option>
            </select>
            {this.state.errors.country && (
              <p className={styles.error}>{this.state.errors.country}</p>
            )}
          </label>

          <div className={styles.radioContainer}>
            <span>Gender: </span>
            <label className={styles.radioLabel}>
              male <input ref={this.sexMale} type="radio" name="sex" />
            </label>

            <label className={styles.radioLabel}>
              female <input ref={this.sexFemale} type="radio" name="sex" />
            </label>
            {this.state.errors.sex && (
              <p className={styles.error}>{this.state.errors.sex}</p>
            )}
          </div>

          <label className={styles.label}>
            Add photo:
            <input
              ref={this.photo}
              className={styles.photo}
              type="file"
              accept=".jpg, .jpeg, .png"
            />
             {this.state.errors.photo && (
              <p className={styles.error}>{this.state.errors.photo}</p>
            )}
          </label>

          <label className={styles.label}>
            I consent to my personal data: <input ref={this.checkbox} type="checkbox" />
            {this.state.errors.checkbox && (
              <p className={styles.error}>{this.state.errors.checkbox}</p>
            )}
          </label>

          <button className={styles.button}>Submit</button>

          {this.state.isAddUsers && <div>Add user</div>}
        </div>
      </form>
    );
  }
}
