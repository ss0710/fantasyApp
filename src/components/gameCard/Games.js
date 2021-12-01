import React from 'react';
import GameCard from './GameCard';
import '../../css/gameCard/game.css';

const Games = () => {

    const gameDetails = [
        {
            winPrice: "1000",
            payPrice: "600",
            spots: "300",
            winners: "2"
        },
        {
            winPrice: "600",
            payPrice: "300",
            spots: "300",
            winners: "45"
        },
        {
            winPrice: "3000",
            payPrice: "1250",
            spots: "900",
            winners: "4"
        },
        {
            winPrice: "1000",
            payPrice: "2300",
            spots: "12",
            winners: "5"
        },
        {
            winPrice: "7000",
            payPrice: "1250",
            spots: "43",
            winners: "7"
        },
        {
            winPrice: "7000",
            payPrice: "1250",
            spots: "43",
            winners: "7"
        },
        {
            winPrice: "3000",
            payPrice: "1250",
            spots: "900",
            winners: "4"
        },
        {
            winPrice: "3000",
            payPrice: "1250",
            spots: "900",
            winners: "4"
        },
        {
            winPrice: "7000",
            payPrice: "1250",
            spots: "43",
            winners: "7"
        },
        {
            winPrice: "1000",
            payPrice: "600",
            spots: "300",
            winners: "2"
        },
        {
            winPrice: "3000",
            payPrice: "1250",
            spots: "900",
            winners: "4"
        },
        {
            winPrice: "3000",
            payPrice: "1250",
            spots: "900",
            winners: "4"
        },
        {
            winPrice: "1000",
            payPrice: "2300",
            spots: "12",
            winners: "5"
        },
        {
            winPrice: "1000",
            payPrice: "600",
            spots: "300",
            winners: "2"
        },
        {
            winPrice: "3000",
            payPrice: "1250",
            spots: "900",
            winners: "4"
        },
        {
            winPrice: "1000",
            payPrice: "2300",
            spots: "12",
            winners: "5"
        },
        {
            winPrice: "3000",
            payPrice: "1250",
            spots: "900",
            winners: "4"
        }
    ]

    return(
        <div className="game_outer_div">
        <div className="game_conatiner_div">
            {
                gameDetails.map((arr, index) => {
                    return <GameCard 
                            winPrice={arr.winPrice}
                            payPrice={arr.payPrice} 
                            spots={arr.spots} 
                            winners={arr.winners}
                        />
                })  
            }
            
        </div>
        </div>
    )
}

export default Games;