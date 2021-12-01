import React from 'react';
import '../../../css/contest/nav/filterNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFunnelDollar } from '@fortawesome/free-solid-svg-icons';

const FilterNav = () => {
    return (
        <div className="filter_nav_container">
            <div className="filter_nav_container_elements">
                <ul className="filter_nav_container_element">
                    <li><FontAwesomeIcon icon={faFunnelDollar} size="1x" className="filter_Icon"/></li>
                    <li>Filter</li>
                    <li>Sort By</li>
                    <li>Entry</li>
                    <li>Prize</li>
                    <li>Spots</li>
                </ul>
            </div>
        </div>
    )
}

export default FilterNav;
