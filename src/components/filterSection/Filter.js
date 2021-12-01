import React from 'react';
import '../../css/filter/filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFunnelDollar } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
    return (
        <div className="filter_container">
            <div className="filter-icon-div">
            <FontAwesomeIcon icon={faFunnelDollar} size="2x" className="filterIcon"/>
            <p>Filter</p>
            </div>
            <div className="filter-option-win-rs">
            <p>Win Rs</p>
            <select name="WinPrice" id="WinPrice">
            <option value="All">All</option>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
            <option value="30000">30000</option>
            </select>
            </div>
            <div className="filter-option-pay-rs">
            <p>pay Rs</p>
            <select name="payPrice" id="payPrice">
            <option value="All">All</option>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
            <option value="30000">30000</option>
            </select>
            </div>
            <div className="filter-team-size">
            <p>size(Team)</p>
            <select name="payPrice" id="payPrice">
            <option value="All">All</option>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
            <option value="30000">30000</option>
            </select>
            </div>
            <div className="filter-reset">
            <button>Find</button>
            </div>
        </div>
    )
}

export default Filter;
