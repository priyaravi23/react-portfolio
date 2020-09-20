import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import Resume from '../components/resume';

function Navbar() {

    return (
        <Router>
            <div className='topnav'>
                <div className='topnav-left'>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className='topnav-right'>
                    <Link to="/portfolio">PORTFOLIO</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/resume">RESUME</Link>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Redirect to="/about" />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume">
                    <Resume />
                </Route>
            </Switch>
        </Router>
    );
}

export default Navbar;