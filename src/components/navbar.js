import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink,
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
                    <NavLink
                        activeClassName="navbar__link--active"
                        className="navbar__link"
                        to="/about"
                    >
                        ABOUT
                    </NavLink>
                </div>
                <div className='topnav-right'>
                    <NavLink
                        activeClassName="navbar__link--active"
                        className="navbar__link"
                        to="/portfolio"
                    >
                        PORTFOLIO
                    </NavLink>
                    <NavLink
                        activeClassName="navbar__link--active"
                        className="navbar__link"
                        to="/contact"
                    >
                        CONTACT
                    </NavLink>
                    <NavLink
                        activeClassName="navbar__link--active"
                        className="navbar__link"
                        to="/resume"
                    >
                        RESUME
                    </NavLink>
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