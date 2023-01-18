import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import MainRouter from './mainRouter.jsx';
import {BrowserRouter} from 'react-router-dom';
import storeData from "./store.jsx"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storeData}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </Provider>
);
