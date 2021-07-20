import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <img className="headerImg" src="../Assets/croppedGum.jpg" alt="new growth eucalypt leaves"></img>
            <div className="title">
                <h1 className="t2">Hi.</h1>
                <h1 className="t2">I'm Sarah McFarland.</h1> 
            </div>  
        </header>
    )
}

export default Header;