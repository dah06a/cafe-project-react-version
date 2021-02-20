import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import MainNavbar from './components/shared/MainNavbar';
import MainFooter from './components/shared/MainFooter';
import Home from './components/home/Home';
import About from './components/about/About';
import Games from './components/games/Games';
import Menu from './components/menu/Menu';
import Reserve from './components/reserve/Reserve';
import './App.css';

const NavbarWithRouter = withRouter(MainNavbar);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarWithRouter />
                <Switch>
                    <Route path="/reserve" component={Reserve} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/games" component={Games} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
                <MainFooter />
            </React.Fragment>

        );
    }
}

export default App;
