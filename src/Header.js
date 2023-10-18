import React from "react";
import logo from './img/logo-updated.jpg';
import Banner from "./Main_Banner";
import './header.css';
import './Media.css';
function Header() {
    return (
        <frameElement>
            <div className="header-container">
                <div className="header-col-left"><img src={logo} alt="logo" /></div>
                <div className="header-col-right"><h3>Welcome to <em class="emph">Aqua Technics </em>Pools</h3></div>

            </div>
            <div><Banner /></div>
        </frameElement>
    )
}

export default Header;



