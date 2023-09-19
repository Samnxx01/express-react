import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutess from '../src/Routes/Public.Routess';

ReactDOM.render(
  <BrowserRouter>
    <PublicRoutess />
  </BrowserRouter>,
  document.getElementById('root')
);
