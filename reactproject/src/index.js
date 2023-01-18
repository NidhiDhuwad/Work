import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import MainRouter from './MainRouter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><MainRouter/></BrowserRouter>);

