import React, { useState } from 'react';
import Header from './HomeSections/Header';
import HomeSkills from './HomeSections/HomeSkills';
import HomeAbout from "./HomeSections/HomeAbout";
import HomeProjects from './HomeSections/HomeProjects';
import Footer from './Footer.js'

function Home() {

    // var [homePage, sethomePage] = useState(initialState);
    // const sethomePage = "/";
    return (
        <div>
            <Header />
            <HomeAbout />
            <HomeSkills />
            <HomeProjects />
            <Footer />
        </div>
    ) ;
}

export default Home;