import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Games from './components/Games';
import Menu from './components/Menu';
import Reserve from './components/Reserve';
import './App.css';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/reserve" component={Reserve} />
                <Route path="/menu" component={Menu} />
                <Route path="/games" component={Games} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

export default App;
