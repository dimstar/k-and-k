import React from 'react';
import { Link } from 'gatsby';

import './kknav.scss';

class KkNavbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navCollape: 'collapse navbar-collapse'
        }
        this.hamburgerHandler.bind(this);
    }

    hamburgerHandler = () => { 
        this.setState({navCollape: (this.state.navCollape === 'show collapse navbar-collapse') ? 'collapse navbar-collapse': 'show collapse navbar-collapse'});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" onClick={this.hamburgerHandler} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.state.navCollape} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/our-story">Our Story</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/registry">Registry</Link>
                    </li>
                    </ul>
                </div>
                </nav>
        )
    }
}

export default KkNavbar;