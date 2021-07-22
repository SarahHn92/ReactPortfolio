import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <section id="contact-me" class="contact-me">
                <div class="">
                    <h2 class="contact-me-header"> Contact Me</h2>
                    <div class="contact-select">
                        <ul>
                            <li class="email"><a href="mailto:smcfarland2@gmail.com>smcfarland2@gmail.com"><i class="far fa-envelope"></i>  smcfarland2@gmail.com</a></li>
                            <li class="phone"><i class="fas fa-phone"></i> 0439000965</li>
                            <li class="linkedin"><a href="https://www.linkedin.com/in/sarah-mcfarland-978404204/"><i class="fab fa-linkedin"></i>  Sarah McFarland</a></li>
                            <li class="github"><a href="https://github.com/SarahHn92"><i class="fab fa-github"></i>  SarahHn92</a></li>
                        </ul>
                    </div>
                </div>
            </section> 
        </footer>
    )
}

export default Footer;

