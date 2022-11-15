import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from "./store";
import { saveState } from './localStorage';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
    canceled: store.getState().canceled,
    done: store.getState().done,
  })
})


root.render(
  <Provider store={store} >
    <App />
  </Provider>
);

