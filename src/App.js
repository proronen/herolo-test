import React, { Component } from 'react';

import Movies from './components/movies';
import ModalContainer from './components/modals/ModalContainer';

class App extends Component {

    render() {
    return (
      <div id="content">
        <h1>Herolo Cinema</h1>
        <Movies />
        <ModalContainer />
      </div>
    );
  }
}

export default App;