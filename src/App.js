import React, { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';
import HomeSkills from './components/HomeSkills';
import HomeAbout from "./components/HomeAbout";
// import Projects from './components/Projects';

function App() {

    // var [homePage, sethomePage] = useState(initialState);
    // const sethomePage = "/";
    return (
        <div>
           <Header />
           <HomeAbout />
           <HomeSkills />
        </div>
    ) ;
}

export default App;