import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './style.scss'


const container = document.getElementById('root')//конструкция React-18
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

reportWebVitals();