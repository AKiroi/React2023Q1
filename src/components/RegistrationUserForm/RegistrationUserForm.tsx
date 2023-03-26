import React from 'react';
import { RegistrationForm } from '../../pages/FormPage/FormPage';
import styles from './RegistrationUserForm.module.scss';

type RegistrationFormProps = {
  addUser: (user: RegistrationForm) => void;
};

export default class RegistrationUserForm extends React.Component<RegistrationFormProps> {
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
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Date.now().toString();
    const firstName = this.firstName.current?.value || '';
    const lastName = this.lastName.current?.value || '';
    const birthday = this.birthday.current?.value || '';
    const sex = this.sexMale.current?.checked ? 'male' : 'female';
    const country = this.country.current?.value || '';
    const files = this.photo.current?.files;
    if (files) {
      const photo = URL.createObjectURL(files[0]);
      this.props.addUser({ id, firstName, lastName, birthday, sex, country, photo });
    }
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.container}>
          <label className={styles.label}>
            Your first name: <input ref={this.firstName} className={styles.input} type="text" placeholder="first name" />
          </label >

          <label className={styles.label}>
            Your last name: <input ref={this.lastName} className={styles.input} type="text" placeholder="last name" />
          </label>

          <label className={styles.label}>
            Your birthday: <input ref={this.birthday} className={styles.date} type="date" />
          </label>

          <label className={styles.label}>
            Country:{' '}
            <select ref={this.country} className={styles.select}>
              <option disabled value="">Choose country</option>
              <option value="England">England</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Poland">Poland</option>
            </select>
          </label>

          <div className={styles.radioContainer}>
            <span>Gender: </span>
            <label className={styles.radioLabel}>
              male <input ref={this.sexMale} type="radio" name="sex" />
            </label>

            <label className={styles.radioLabel}>
              female <input ref={this.sexFemale} type="radio" name="sex" />
            </label>
          </div>

          <label className={styles.label}>
            Add photo: 
            <input ref={this.photo} className={styles.photo} type="file" accept=".jpg, .jpeg, .png" />
          </label>

          <label className={styles.label}>
            I consent to my personal data: <input ref={this.checkbox} type="checkbox" />
          </label>

          <button className={styles.button}>Submit</button>
        </div>
      </form>
    );
  }
}
