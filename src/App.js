import React, { useState } from 'react';
import Header from './components/Header';
import HomeSkills from './components/HomeSkills';
import HomeAbout from "./components/HomeAbout";
import HomeProjects from './components/HomeProjects';

function App() {

    // var [homePage, sethomePage] = useState(initialState);
    // const sethomePage = "/";
    return (
        <div>
            <Header />
            <HomeAbout />
            <HomeSkills />
            <HomeProjects />
        </div>
    ) ;
}

export default App;