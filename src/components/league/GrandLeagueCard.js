import React from 'react';
import '../../css/league/grandLeagueCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const GrandLeagueCard = ({ num, winningPrice, winners }) => {
    return (
        <div className="grandLeagueCard_container">
            <div className="grandLeagueCard_container_div">
                <div className="leagueCard_heading_div">
                    <p className="card_heading">Grand League</p>
                    <p>{num}</p>
                </div>
                <div className="leagueCard_details">
                    <div className="card_content">
                        <p className="card_winning_price">Win Rs.{winningPrice}</p>
                        <p className="card_winners_count"> <FontAwesomeIcon icon={faCrown} size="1x"/> {winners} winners</p>
                    </div>
                    <div className="card_button">
                        <button className="league_card_button">Join</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrandLeagueCard
