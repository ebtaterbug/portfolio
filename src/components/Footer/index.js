import React from 'react';
import { Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {   
    return (
        <footer class="row mt-5">
            <a href="https://github.com/ebtaterbug" target="_blank"><Github color="black" size={50} /></a>
            <a href="https://www.linkedin.com/in/ian-joseph-34418821b/" target="_blank"><Linkedin color="black" size={50} /></a>
        </footer>
    )
}

export default Footer;