import './App.css';
import React from 'react';
import Main from '../../pages/Main/Main';
import AboutUs from '../../pages/AboutUs/AboutUs';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}
