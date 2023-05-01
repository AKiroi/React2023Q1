import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { initialStore, RootState } from './store/store';

import './index.css';

type WindowType = Window &
  typeof globalThis & {
    PRELOADED_STATE?: RootState;
  };

const store = initialStore((window as WindowType).PRELOADED_STATE);
delete (window as WindowType).PRELOADED_STATE;

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
