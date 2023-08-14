import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'components/App';
import Loader from 'components/Loader/Loader';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
