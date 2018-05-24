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

    username(e) {
        this.setState({
            username: e.target.value
        })
    }
    password(e) {
        this.setState({
            password: e.target.value
        })
    }

    createPassword() {
        if (this.usernameCheck(this.state.username) && this.passwordCheck(this.state.password)) {
            alert('Username and password updated')
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
                    onChange={(e) => this.username(e)}
                    hintText="Type your new username"
                    floatingLabelText="Username"
                />
                <br />
                <p>Password must contain:</p>
                <p>- at least 8 characters</p>
                <p>- upppercase and lowercase letters</p>
                <p>- a number</p>
                <TextField
                    onChange={(e) => this.password(e)}
                    hintText="type your new password"
                    floatingLabelText="Password"
                /><br />
                <br />
                <RaisedButton onClick={()=>this.createPassword()} label="Create" secondary={true} />
            </div> 
        )
    }
}