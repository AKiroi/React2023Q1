import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutUs';
import MainPage from '../../pages/MainPage/MainPage';
import FormPage from '../../pages/FormPage/FormPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Header from '../Header/Header';

import './app.css';
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/formPage" element={<FormPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}
