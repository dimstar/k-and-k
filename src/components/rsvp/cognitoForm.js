import React from 'react';
import ReactDOM from 'react-dom';

class CognitoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            iFrameHeight: '0px'
        }
    }

    componentDidMount() {
        // Cognito.load("forms", { id: "1" }); // eslint-disable-line
    }
    
    render() {
        return (<iframe  
            src="https://services.cognitoforms.com/f/ySrL_amEAES1jxwusWYkpw?id=1"
            style={{
                position:'relative',
                minWidth:'100%',
                width:'100%',
                overlfow: 'scroll',
                scroll: true
            }}
            // onLoad={() => {
            //     const obj = ReactDOM.findDOMNode(this);
            //     console.log(obj);
            //     this.setState({
            //         "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px'
            //     });
            // }} 
            height={this.state.iFrameHeight}
            scrolling="no"
            frameBorder="0"
        ></iframe>)
    }
}

export default CognitoForm;

/*
<iframe src="https://services.cognitoforms.com/f/ySrL_amEAES1jxwusWYkpw?id=1" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="542" width="100%"></iframe>
<script src="https://services.cognitoforms.com/scripts/embed.js"></script>
*/