import React from 'react';
import '../../css/home/home.css';
import HomePageRoutes from '../routes/HomePageRoutes';
import Filter from '../filterSection/Filter';
import Games from '../gameCard/Games';
import Nav from './Nav';
import MyContest from '../myContests/MyContest';
import GrandLeague from '../league/GrandLeague';

const Home = () => {
    return (
        <div>
            <Nav />
            <MyContest />
            <GrandLeague />
            <HomePageRoutes />
            <Filter />
            <Games />
        </div>
    )
}

export default Home;
