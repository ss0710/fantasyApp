import React from 'react';
import GrandLeagueCard from './GrandLeagueCard';
import '../../css/league/grandleague.css';

const GrandLeague = () => {

    const array = [
        {
            num: "2,518/4750",
            winningPrice: "15,00,000",
            winners: "3000"
        }, 
        {
            num: "2,518/4750",
            winningPrice: "15,00,000",
            winners: "3000"
        }
    ]

    return (
        <div className="grandLeague_container">
        {
            array.map((array, index) => {
                return <GrandLeagueCard  num={array.num} winningPrice={array.winningPrice} winners={array.winners}/>
            })
        }
        </div>
    )
}

export default GrandLeague;
