import React from 'react';
// import Iframe from 'react-iframe';
import CognitoForm from './cognitoForm';

import './rsvp.scss';

class Rsvp extends React.Component {
    constructor(props){
        super(props);
    
        this.state = { 
            offCanvas: 'up', 
            rsvpButtonVal: 'RSVP',
            fireCognito: this.props.fireCognito,
        };
        this.openRsvp = this.openRsvp.bind(this);
    }

    componentDidMount() {
        
    }

    openRsvp() {
        this.setState({
            offCanvas: (this.state.offCanvas === 'up') ? 'down' : 'up',
            rsvpButtonVal: (this.state.rsvpButtonVal === 'RSVP') ? 'CLOSE' : 'RSVP',
        });
    }
    
    render() {
        return (<div style={{position: 'relative', overflow: 'visible'}}>
            <div className={"rsvp-holder " + this.state.offCanvas}>
                <CognitoForm fireCognito={this.state.fireCognito} />
            </div>
            <input className="rsvp-btn" type="button" value={this.state.rsvpButtonVal} onClick={this.openRsvp} />
        </div>)
    }
}

export default Rsvp;