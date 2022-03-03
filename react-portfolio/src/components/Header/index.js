import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Portfolio from "../../components/Project";
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';


function Header() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </HashRouter>
    );
}

export default Header;