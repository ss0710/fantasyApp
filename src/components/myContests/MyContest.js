import React from 'react';
import '../../css/myContests/myContest.css';
import MyContestCard from './MyContestCard';

const MyContest = () => {
    return (
        <div className="my_contest_container">
            <div className="my_contest_div">
                <div className="my_contest_heading">
                <p className="contest_heading">My Contests</p>
                <p className="contest_view_all_text">View All</p>
                </div>
                <div className="my_contest_card_div">
                    <MyContestCard price="10 Lakhs" ContestName="Beat The Index" SartTime="9:15am" EndTime="3:30pm" />
                    <MyContestCard price="10,000" ContestName="Best Returns" SartTime="11:15am" EndTime="2:30pm" />
                </div>
            </div>
        </div>
    )
}

export default MyContest;
