import React from 'react';
// import './Cognito';

class CognitoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fireCognito: (this.props.fireCognito) ? true : false,
        }
    }

    componentDidMount() {
        console.log( 'final spawn: ',this.props.fireCognito);
        if(this.state.fireCognito === true ){
            Cognito.load("forms", { id: "1" }); // eslint-disable-line
        }
    }
    
    render() {
        return (<div className="cognito"></div>)
    }
}

export default CognitoForm;