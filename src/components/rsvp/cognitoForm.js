import React from 'react';
// import './Cognito';

class CognitoForm extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        Cognito.load("forms", { id: "1" }); // eslint-disable-line
    }
    
    render() {
        return (<div className="cognito"></div>)
    }
}

export default CognitoForm;