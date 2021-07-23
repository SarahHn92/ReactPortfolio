import React from 'react';
import '../styles/Nav.css';


function Nav({ currentPage, handlePageChange }) {
    return (
        <header className="navbar">
            <nav className="toolbar">
                <div className="left">
                    <div id="logo"
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} >
                        {<i class="fas fa-igloo"></i>}
                    </div> 
                    
                </div>
                               
                <div className="nav-items right">
                    <ul>
                        <li id="about-nav" 
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                            About
                        </li>
                        <li id="skills-nav"
                            onClick={() => handlePageChange('Skills')}
                            className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}>
                            Skills
                        </li>
                        <li id="projects-nav" 
                            onClick={() => handlePageChange('Projects')}
                            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                            Projects
                        </li>
                    </ul>
                </div>
            </nav> 
        </header>
       
    )

}

export default Nav;
