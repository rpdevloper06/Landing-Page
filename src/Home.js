import React from "react";
import './Home.css';
import map from './img/Map.jpg';
//import image from './img/img1.jpg';
import awards from './img/award-updated.jpg';
import Fibreglass from "./Fibreglass_Swimming_Pool";
import AusNetwork from "./AT_Australia_Network";
import Slider from "./Slider_steps";
import './Media.css';
function Home() {
    return (
        <frameElement>
            <Fibreglass />
            <div className="awardPanel">
                <div className="award-col-left"><h2>Australia’s most awarded pool company</h2></div>
                <div className="award-col-right"><img src={awards} className="award" alt="Australia’s most awarded pool company" /></div>
            </div>
            <AusNetwork />
            <div className="globalNetwork"><h1>Aqua Technics Global Network</h1><p>Every year our swimming pools travel thousands of miles to destinations all over the world. Do not be surprised if you see one of our pools in a ski resort in Austria, a home in Europe or New Zealand or a backyard as far away as tropical Reunion Island. The reason for our international success is the quality of our products. Our commitment to stringent quality controls has been recognised throughout the world and is the reason why Aqua Technics is WA’s number one exporter of pre-fabricated swimming pools. Our pools are built thicker and stronger to last longer, with the highest fade resistance of any pool available in the world today. Only Aqua Technics has the technical knowledge and expertise to utilise vastly superior and unique manufacturing processes. </p></div>
            <div className="globalMap"><img src={map} className="ausMap" alt="Aqua Technics Global Network" /></div>

            <Slider />

        </frameElement>
    )
}

export default Home;