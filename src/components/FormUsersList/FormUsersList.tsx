import React, { FC } from 'react';
import FormUserCard from '../FormUserCard/FormUserCard';
import styles from './FormUsersList.module.scss';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const FormUsersList: FC = () => {
  const { users } = useSelector((state: RootState) => state.formCard);

  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <FormUserCard user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default FormUsersList;
