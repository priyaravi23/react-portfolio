import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

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
                    <Redirect from="/" exact to="/about" />
                </div>
            </div>

            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}

export default Navbar;