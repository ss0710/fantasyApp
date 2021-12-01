import React from 'react';
import '../../css/myContests/myContestCard.css'
import ClockLogo from '../../assets/clock.PNG';

const MyContestCard = ({ price, ContestName, SartTime, EndTime }) => {
    return (
        <div className="my_contest_card_container">
            <div className="my_contest_card_container_div">
                <div className="my_contest_card_heading">
                    <p>Rs {price} - {ContestName}</p>
                </div>
                <div className="my_contest_card_timing">
                    <img src={ClockLogo} alt="cock_logo"/><p>{SartTime} - {EndTime} | Live</p>
                </div>
            </div>
        </div>
    )
}

export default MyContestCard;
