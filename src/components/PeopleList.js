import React, { Component } from 'react';
import Person from './Person';
//material-ui components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//css
import './../App.css';

const style = {
  margin: 12
}

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [{name: 'Joe', birthyear: 1972}],
      name: '',
      birthyear: ''
    }
  }

  formSubmit(e) {
    e.preventDefault();
    let {name, birthyear, people} = this.state;
    if (!name || !birthyear) return alert('Please enter name and birthyear.');
    let newPerson = {name, birthyear};
    this.setState({people: [...people, newPerson], name: '', birthyear: ''})
  }

  render() {

    let peopleCards = this.state.people.map( (person, i) =>  {
      return <Person person={person} key={i} />
    })

    return (
      <div className="App" style={style}>
      
        <form onSubmit={(e) => this.formSubmit(e)}>
          <h3>Create new person:</h3>
          <TextField
            onChange={({target})=> this.setState({name: target.value})}
            style={style}
            floatingLabelText="Full name"
          /><br />
          <TextField
            onChange={({target})=> this.setState({birthyear: target.value})}
            style={style}
            floatingLabelText="Birth year"
          /><br />
          <RaisedButton type='submit' label="Add" primary={true} style={style} />
        </form>
        <div className='card-container'>
          {peopleCards}
        </div> 
      </div>
    );
  }
}

export default PeopleList;
