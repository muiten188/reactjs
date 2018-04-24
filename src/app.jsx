import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './containers/app.jsx';
//import AwesomeComponent from './client/app/AwesomeComponent';
require("./index.html");
const container = document.getElementById('app');

ReactDOM.render(
  <App />,
  container
)