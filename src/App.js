import React, { Component } from 'react';
import CreateContainer from './containers/Create.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <CreateContainer />
      </div>
    );
  }
}

export default App;
