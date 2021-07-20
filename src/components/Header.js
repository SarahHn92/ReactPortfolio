import React from 'react';
import '../Assets/croppedGum.jpg';
import '../styles/Header.css';
import Nav from './Nav';

function Header() {
    return (
        <header className="header">
            <Nav />
            <img className="headerImg" src="../Assets/croppedGum.jpg" alt="new growth eucalypt leaves"></img>
            <div className="title">
                <h1 className="t2">Hi.</h1>
                <h1 className="t2">I'm Sarah McFarland.</h1> 
            </div>  
        </header>
    )
}

export default Header;