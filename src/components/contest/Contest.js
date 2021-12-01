import React from 'react';
import '../../css/contest/contest.css';
import ContestNav from './nav/ContestNav';
import FilterNav from './nav/FilterNav';
import ContestList from './contests/contestList/ContestList';
import MyFunds from './myFunds/MyFunds';

const Contest = () => {
    return (
        <div className="contest_container">
            <ContestNav />
            <MyFunds />
        </div>
    )
}

export default Contest;
