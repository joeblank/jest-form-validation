import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    updateInput(e, property) {
        this.setState({[property]: e.target.value})
    }

    // update
    usernameCheck() {
        return true;
    }
    // update
    passwordCheck() {
        return true;
    }

    createPassword() {
        if (this.usernameCheck() && this.passwordCheck()) {
            alert('Username and password created')
        } else {
            alert('Please follow instructions when creating a username and password')
        }
    }

    render() {
        return (
            <div style={{margin: 20}}>
                <h4>Create username and password</h4>
                <span>Username must be at least 6 characters and cannot contain spaces.</span>
                <br />
                <TextField
                    onChange={(e) => this.updateInput(e, 'username')}
                    hintText="Type your new username"
                    floatingLabelText="Username"
                />
                <br />
                <p>Password must contain:</p>
                <p>- at least 8 characters</p>
                <p>- upppercase and lowercase letters</p>
                <p>- a number</p>
                <TextField
                    onChange={(e) => this.updateInput(e, 'password')}
                    hintText="type your new password"
                    floatingLabelText="Password"
                /><br />
                <br />
                <RaisedButton onClick={()=>this.createPassword()} label="Create" secondary={true} />
            </div> 
        )
    }
}