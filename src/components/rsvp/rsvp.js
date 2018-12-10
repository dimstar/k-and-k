import React from 'react';
// import Iframe from 'react-iframe';

import './rsvp.scss';

class Rsvp extends React.Component {
    constructor(props){
        super(props);
        this.state = { offCanvas: 'up' };
        this.openRsvp = this.openRsvp.bind(this);
    }

    componentDidMount() {
        Cognito.load("forms", { id: "1" }); // eslint-disable-line
    }

    openRsvp() {
        this.setState({offCanvas: (this.state.offCanvas === 'up') ? 'down' : 'up' });
    }
    
    render() {
        return (<div>
            <div className={"rsvp-holder " + this.state.offCanvas}>
                <div className="cognito"></div>
                <input className="rsvp-btn" type="button" value="RSVP" onClick={this.openRsvp} />
            </div>
        </div>)
    }
}

export default Rsvp;