import React from 'react';
import '../../../../css/contest/contestList/contestListCard.css';
import ClockImg from '../../../../assets/clock.PNG';
import WinnerLogo from '../../../../assets/winner.PNG';
import StockLogo from '../../../../assets/stock.PNG';
import FundsLogo from '../../../../assets/funds.PNG';

const ContestListCard = () => {
    return (
        <div className="contest_list_card_container">
            <div className="contest_card_container_div">
            <div className="contest_card_container_one">
            <div className="contest_card_stats">
                <div className="contest_card_price">
                <p>10 Lakhs</p>
                </div>
                <div className="contest_card_details">
                <p>Rs 269</p>
                <button>Rs 250</button>
                </div>
            </div>
            <div className="contest_card_timings">
                <div className="contest_card_time">
                <img src={ClockImg} alt="clock_png" /><p>9.15 am - 03:30pm | Today</p>
                </div>
                <div className="contest_card_spots_details">
                    <div className="contest_card_spots">
                        <div className="spots_details">
                            <p>60% filled</p>
                            <p>500 spots</p>
                        </div>  
                        <div className="contest_card_spots_skill-bar">
                        <div className="contest_card_spots_skill-progress">
                        <div className="contest_card_spots_progress" style={{"width": "60%"}}>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="contest_card_funds_details">
            <img src={WinnerLogo} alt="winner_logo"/><p className="contest_card_winning_price">RS 1 lakh</p>
            <img src={StockLogo} alt="stock_logo"/><p className="contest_card_percentage">60%</p>
            <img src={FundsLogo} alt="funds_logo"/><p className="contest_card_max_funds">Max 5 funds allowed</p>
            </div>
        </div>
        </div>
    )
}

export default ContestListCard;
