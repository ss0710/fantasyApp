import React from 'react';
import "../../../css/contest/myFunds/myFunds.css";
import MyFundsCard from './MyFundsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const MyFunds = () => {
    return (
        <div className="my_funds_container">
            <MyFundsCard />
            <MyFundsCard />
            <MyFundsCard />
            <div className="add_icon_div">
            <FontAwesomeIcon icon={faPlusCircle} size="4x" className="plus_icon"/>
            <p>ADD</p>
            </div>
        </div>
    )
}

export default MyFunds;
