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
    this.checkbox= React.createRef();
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
      this.props.addUser({id, firstName, lastName, birthday, sex, country, photo})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Your first name: <input ref={this.firstName}  type="text" placeholder="first name" />
        </label>

        <label>
          Your last name: <input ref={this.lastName} type="text" placeholder="last name" />
        </label>

        <label>
          Your birthday: <input ref={this.birthday} type="date" />
        </label>

        <label>
          Country:{' '}
          <select ref={this.country}>
            <option disabled>Choose country</option>
            <option value="England">England</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Poland">Poland</option>
          </select>
        </label>

        <div className="sex">
          <span>Sex: </span>
          <label>
            male <input ref={this.sexMale} type="radio" name="sex" />
          </label>

          <label>
            female <input ref={this.sexFemale} type="radio" name="sex" />
          </label>
        </div>

        <label>
          Add photo: <input ref={this.photo} type="file" accept=".jpg, .jpeg, .png" />
        </label>

        <label>
          I consent to my personal data: <input ref={this.checkbox} type="checkbox" />
        </label>

        <button>Submit</button>
      </form>
    );
  }
}
