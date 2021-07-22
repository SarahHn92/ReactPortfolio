import React from 'react';
import '../styles/Nav.css';


function Nav({ currentPage, handlePageChange }) {
    return (
        <header className="navbar">
            <nav className="toolbar">
                <div className="left">
                    <div className="logo">
                        <a 
                            href="#home"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                            >
                            {<i class="fas fa-igloo"></i>}
                        </a>
                    </div> 
                </div>
                               
                <div className="nav-items right">
                    <ul>
                        <li className="about-nav">
                            <a 
                                href="./Pages/About"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                >
                                    About
                            </a>
                        </li>
                        <li className="skills-nav">
                            <a 
                                href="./Pages/Skills"
                                onClick={() => handlePageChange('Skills')}
                                className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
                                >
                                    Skills
                            </a>
                        </li>
                        <li className="projects-nav">
                            <a 
                                href="./Pages/Projects"
                                onClick={() => handlePageChange('Projects')}
                                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                                >
                                    Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </nav> 
        </header>
       
    )

}

export default Nav;
