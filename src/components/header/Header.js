import React, { useState } from 'react';
import classes from "./Navbar.module.css";
import Logo from './Logo';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [navbar, setNavabr] = useState(false);

  const boxShadowHandler = () => {
    if (window.scrollY >= 100) {
      setNavabr(true);
    } else if (window.scrollY < 100) {
      setNavabr(false);
    }
  };

  let navbarActiveclass = [classes.Navbar, null];

  if (navbar === true) {
    navbarActiveclass = [classes.Navbar, classes.active];
  }

  window.addEventListener("scroll", boxShadowHandler);
    return (
        <header>
            <div className={navbarActiveclass.join(" ")}>
                <div className={classes.Container}>
                    <div className={classes.NavbarLeft}>
                    <NavLink to="/" className={classes.NavbarLogo}>
                    <Logo />
                    </NavLink>
                    </div>
                    <div className={classes.NavbarRight}>
                        <ul className={classes.NavigationItems}>
                           <li className={classes.NavigationItem}>
                            <NavLink to="/" exact activeClassName={classes.selected}>
                            <p>Home</p>
                            </NavLink>  
                            </li>
                            <li className={classes.NavigationItem}>
                            <NavLink to="/live" activeClassName={classes.selected}>
                            <p>Live</p>
                            </NavLink>  
                            </li>
                            <li className={classes.NavigationItem}>
                            <NavLink to="/contest" activeClassName={classes.selected}>
                            <p>My Contests</p>
                            </NavLink>
                            </li>
                            <li className={classes.NavigationItem}>
                            <NavLink to="/market" activeClassName={classes.selected}>
                            <p>Market</p>
                            </NavLink>
                            </li>
                            <li className={classes.NavigationItem}>
                            <NavLink to="/blog" exact activeClassName={classes.selected}>
                            <p>Blog</p> 
                            </NavLink>  
                            </li>
                            <li className={classes.NavigationItem}>
                            <NavLink to="/wallet" exact activeClassName={classes.selected}>
                            <p>Wallet</p>
                            </NavLink>  
                            </li>
                            <li className={classes.NavigationItem}>
                            <NavLink to="/profile" exact activeClassName={classes.selected}>
                            <p>Profile</p>
                            </NavLink>  
                            </li>
                        </ul>
                    </div>  
                </div>
            </div>
        </header>
    )
}

export default Header;
