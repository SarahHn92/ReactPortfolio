import React from 'react';
import Photo from'../../Assets/croppedGum.png';
import '../../styles/Header.css';
import Nav from '../Nav';


function Header() {
    return (
        <header className="header">
            <div>
                <img className="headerImg" src={Photo} alt="new growth eucalypt leaves"></img>
            </div>
            <div className="title">
                <h1 className="t1">Hi.</h1>
                <h1 className="t2">I'm Sarah McFarland.</h1> 
            </div>  
        </header>
    )
}

export default Header;