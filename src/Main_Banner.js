import React from "react";
import './header.css';
import './Home.css';
import './Media.css';
import map from './img/aus-map-may-21-now10.png';
//import mainbanner from './img/aquatechnicsMainBanner.jpg';
//import image1 from './img/banner-1.jpg';
//import image2 from './img/banner-2.jpg';
//import image3 from './img/banner-3.jpg';

function Banner() {
  return (<div className="mainBanner"><h2>Welcome to<br />Aqua Technics</h2><h4>Where are you located?</h4><img src={map} className="sliderimg" alt="Fibreglass Pools" /></div>
  )
}

export default Banner;