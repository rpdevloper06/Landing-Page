import React from "react";
import network from './img/alt-network-updated.jpg';
import './AT_Australa_Network.css';


function AusNetwork() {
    return (
        <div className="ausNetwork">
            <div className="ausNetwork_left"><h1>Aqua Technics Australia Network</h1><p>Aqua Technics is committed to expanding its network of reputable distributors to all corners of Australia. Our national agents offer a wide range of fibreglass swimming pools built to our exact requirements – pools that are thicker, stronger and guaranteed to last longer. All agents are qualified and experienced to handle your swimming pool enquiries and offer a one-stop service including sales, installation and after care. Whether you are in Perth, Melbourne, Brisbane, Canberra, Adelaide or Sydney, you can now own the highest quality fibreglass swimming pool available. </p></div>
            <div className="ausNetwork_right"><img src={network} className="at_image" alt="Aqua Technis - Australia" /></div>
        </div>
    )
}

export default AusNetwork;