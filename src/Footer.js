import React from "react";
import './footer.css';
import './Media.css';
import year from './img/47-years-logo-updated.jpg';
import logo from './img/logo-updated.jpg';
import fb from './img/fb.png';
import twit from './img/twit.png';
import yout from './img/yout.png';
import inst from './img/inst.png';
function Footer() {
    return (
        <div className="footer-container">
            <div class="footer_body">
                <div className="footer_col1"><img src={logo} alt="Aqua Technics Fibreglass Swimming Pools" /></div>
                <div className="footer_col2"><div className="social-container">
                    <div className="social_col1"><img src={fb} alt="Aqua Technics - Facebook" /></div>
                    <div className="social_col1"><img src={inst} alt="Aqua Technics - Instagram" /></div>
                    <div className="social_col1"><img src={twit} alt="Aqua Technics - Twitter" /></div>
                    <div className="social_col1"><img src={yout} alt="Aqua Technics - Youtube" /></div>
                </div></div>
                <div className="footer_col3"><img src={year} alt="Aqua Technics Fibreglass Swimming Pools" /></div>
            </div>
        </div>
    )
}

export default Footer;