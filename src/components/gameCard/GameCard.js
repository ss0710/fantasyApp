import React from 'react';
import '../../css/gameCard/gameCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const GameCard = ({ winPrice, payPrice, spots, winners }) => {
    return (
        <div className="gameCard_container">
            <div className="gameCard_container_div">
                <div className="gameCard_win_price">
                    <p>Win Rs.{winPrice}</p>
                </div>
                <div className="gameCard_pay_price">
                    <p>Pay Rs.{payPrice}</p>
                </div>
                <div className="gameCard_spots">
                    <p>{spots} spots</p>
                </div>
                <div className="skill-bar">
                <div className="skill-progress">
                <div className="progress">
                    <div className="inner-pregress" style={{width:40}}></div>
                </div>
                </div>
                </div>
                <div className="gameCard_winners">
                    <p> <FontAwesomeIcon icon={faCrown} size="1x"/> {winners} winners</p>
                    <button>Join</button>
                </div>
            </div>
        </div>
    )
}

export default GameCard;
