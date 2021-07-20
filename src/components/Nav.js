import React from 'react';
import '../styles/Nav.css';

function Nav(props) {
    return (
        <header className="navbar">
            <nav className="toolbar">
                <div className="hamburger"></div>
                <div className="logo"><a href="/">"LOGO"</a></div>
                <div className="space"></div>                
                <div className="nav-items">
                    <ul>
                        <li className="about-nav"><a href="/About">About</a></li>
                        <li className="skills-nav"><a href="/Skills">Skills</a></li>
                        <li className="projects-nav"><a href="/Projects">Projects</a></li>
                    </ul>
                </div>
            </nav> 
        </header>
       
    )

}

export default Nav;
