import React from 'react';
import '../../css/contest/contestSection.css';
import LeaderBoard from './LeaderBoard';
import Prizes from './Prizes';
import StockData from './StockData';
import { Switch, Route, Link } from 'react-router-dom';

const ContestSection = () => {
    return (
        <div className="contest_section_container">
            <div className="contest_section_buttons">
                <Link to="/leaderBoard" className="contest_section_button">Leaderboard</Link>
                <Link to="/prizes" className="contest_section_button">Prizes</Link>
                <Link to="/stockData" className="contest_section_button">Stock Data</Link>
            </div>
            <div classname="contest_section_data">
                <Switch>
                    <Route path="/leaderboard" component={LeaderBoard} />
                    <Route path="/prizes" component={Prizes} />
                    <Route path="/stockData" component={StockData} />
                </Switch>
            </div>
        </div>
    )
}

export default ContestSection;
