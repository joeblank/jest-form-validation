import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0,
            isMillennail: 'unknown',
            isAdult: 'unknown',
            isRetiree: 'unknown'
        }
    }
    isMillennail() {
        this.setState({
            isMillennail: this.props.person.birthyear > 1982 ? 'Yes':'No'
        })
    }
    isAdult() {
        this.setState({
            isAdult: this.age >= 18 ? 'Yes': 'No'
        })
    }
    calculateAge(birthdate) {
        let ageDiffMs = Date.now() - birthdate.getTime()
        let ageDate = new Date(ageDiffMs);
        let age = ageDate.getUTCFullYear() - 1970;
        this.setState({age});
    }
    render() {
        let {name} = this.props.person;
        console.log(this.state.isMillennail)
        return (
            <div>
                <h4>{name} - {this.age}</h4>
                <RaisedButton onClick={()=> this.isMillennail()} label="Millennial?" secondary={true} style={{margin: 12}} />
                <span>{this.state.isMillennail}</span>
                <br />
                <RaisedButton onClick={()=> this.isAdult()} label="Adult?" secondary={true} style={{margin: 12}} />
                <span>{this.state.isAdult}</span>
            </div> 
        )
    }
}