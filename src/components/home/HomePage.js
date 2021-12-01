import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import '../../css/home/homePage.css'
import Contest from '../contest/Contest';
import Header from '../header/Header';
import Home from './Home';
import Live from '../Live/Live';
import Market from '../Market/Market';
import Blog from '../Blog/Blog';
import Wallet from '../Wallet/Wallet';
import Profile from '../Profile/Profile';
import SignIn from '../auth/SignIn';

const HomePage = () => {

    let { path, url } = useRouteMatch();

    return (
        <div className="home_container">
            <Header />
            <div className="home_div">
                <div className="home_left_div">
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/live" component={Live}/>
                        <Route path="/contest" component={Contest}/>
                        <Route path="/market" component={Market}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/wallet" component={Wallet}/>
                        <Route path="/profile" component={Profile}/>
                    </Switch>
                </div>
                <div className="home_right_div">

                </div>
            </div>
        </div>
    )
}

export default HomePage;
