import React from 'react';
import '../styles/Nav.css';
// import {faIgloo} from '@fortawesome/react-fontawesome';


function Nav(props) {
    return (
        <header className="navbar">
            <nav className="toolbar">
                <div className="left">
                   <div className="hamburger"></div>
                <div className="logo"><a href="/">{<i class="fas fa-igloo"></i>}</a></div> 
                </div>
                               
                <div className="nav-items right">
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
