import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutUs';
import MainPage from '../../pages/MainPage/MainPage';
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
          <Route path="/FormPage" element={<AboutPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}
