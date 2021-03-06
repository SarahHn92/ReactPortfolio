import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Footer from './Footer';


function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    function handlePageChange (page) {
        setCurrentPage(page); 
    } 
    const renderPage = () => {
        
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Skills') {
            return <Skills />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
    }
    
       console.log(handlePageChange);
    
    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default PortfolioContainer;