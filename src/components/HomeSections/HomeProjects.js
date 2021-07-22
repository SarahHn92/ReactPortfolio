import React from 'react';
import Photo from '../../Assets/Projects.png'
import '../../styles/HomeProjects.css'

function HomeProjects() {
    return(
        <section className="img-section">
            <br></br>
            <a href="/Projects"><img className="projImg" src={ Photo } alt="Project Screenshot Banner"></img></a>
            <br></br>
        </section>
    )
}

export default HomeProjects;