import React, { Component } from 'react';
import PeopleList from './components/PeopleList';
import Form from './components/Form';
//css
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <hr />
        <PeopleList />
      </div>
    );
  }
}

export default App;
