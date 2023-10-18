import React from "react";
import image from './img/alt-updated.jpg';
import './Fibreglass_Swimmimg_Pool.css';


function Fibreglass() {
    return (
        <div className="homePanel1">
            <div className="homePanel_left"><img src={image} className="at_image" alt="Aqua Technics Fibreglass Swimming Pools" /></div>
            <div className="homePanel_right"><h1>Fibreglass Swimming Pools</h1><p>Aqua Technics has been manufacturing award-winning fibreglass pools since 1976. Right from day one, we knew that if we wanted to be the leading swimming pool manufacturer in Australia, we also had to lead the way with product development and technology. So, we began researching new manufacturing methods and materials while continuing to push the boundaries on fibreglass swimming pool innovation. We have the best range of technologically advanced fibreglass pools in Australia at the best prices. We are Australia’s most awarded swimming pool company with over 230 awards received both locally and internationally. </p></div>
        </div>
    )
}

export default Fibreglass;