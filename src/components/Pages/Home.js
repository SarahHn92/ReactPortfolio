import React from 'react';
import Header from '../HomeSections/Header';
import HomeSkills from '../HomeSections/HomeSkills';
import HomeAbout from "../HomeSections/HomeAbout";
import HomeProjects from '../HomeSections/HomeProjects';

function Home() {

    return (
        <div>
            <Header />
            <HomeAbout />
            <HomeSkills />
            <HomeProjects />
        </div>
    ) ;
}

export default Home;