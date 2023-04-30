import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { initStore, RootState } from './store/store';

import './index.css';

const store = initStore(window.PRELOADED_STATE);

delete window.PRELOADED_STATE;

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
