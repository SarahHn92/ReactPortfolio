import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Footer from './Footer';


function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

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
        return <Footer />
    }
    
    const handlePageChange = (page) => setCurrentPage(page);    
    
    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default PortfolioContainer;