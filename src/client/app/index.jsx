import React from 'react';
import { render } from 'react-dom';
require('./css/test.css');
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render() {
    return (
      <div class="home">
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
