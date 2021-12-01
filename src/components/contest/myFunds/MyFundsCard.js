import React from 'react';
import "../../../css/contest/myFunds/myFundsCard.css";

const MyFundsCard = () => {
    return (
        <div className="my_funds_card_container">
            <div className="my_funds_card_heading_div">
                <p className="my_funds_card_heading">FUND 1</p>
            </div>
            <div className="my_funds_card_details">
                <div className="my_funds_card_score">
                <p className="my_funds_card_score_heading">Score</p>
                <p className="my_funds_card_score_number">1.234</p>
                </div>
                <div className="my_funds_card_stocks">
                <p className="my_funds_card_stocks_heading">Stocks Chosen</p>
                <p className="my_funds_card_stocks_number">20</p>
                </div>
                <div className="my_funds_card_nifty">
                <button>Nifty 50</button>
                </div>
            </div>
        </div>
    )
}

export default MyFundsCard;
