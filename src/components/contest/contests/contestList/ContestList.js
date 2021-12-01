import React from 'react';
import '../../../../css/contest/contestList/contestList.css';
import ContestListCard from './ContestListCard';

const ContestList = () => {
    return (
        <div className="contest_list_container">
            <div className="contest_list_container_div">
                <ContestListCard />
                <ContestListCard />
                <ContestListCard />
                <ContestListCard />
                <ContestListCard />
            </div>
        </div>
    )
}

export default ContestList;
