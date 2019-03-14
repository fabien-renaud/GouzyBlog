import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

import logo from './header.png';
import facebook from './facebook-icon.svg';
import twitter from './twitter-icon.svg';
import instagram from './instagram-icon.svg';
import linkedin from './linkedin-icon.svg';

export default function Header() {
    return (
        <div className="Header">
            <nav>
                <ul>
                    <li><a href="https://www.facebook.com/Pearl.Marine"><img src={facebook} className="icon" alt="Retrouvez-moi sur Facebook" /></a></li>
                    <li><a href="https://twitter.com/marindodouss_"><img src={twitter} className="icon" alt="Suivez-moi sur Twitter" /></a></li>
                    <li><a href="/"><img src={instagram} className="icon" alt="Instagram, c'est par là" /></a></li>
                    <li><a href="https://www.linkedin.com/in/mrnroch/"><img src={linkedin} className="icon" alt="Linkedin, par ici" /></a></li>
                </ul>
                <ul>
                    <li>À propos</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <header>
                <Link to="/a"><img src={logo} alt="Logo" /></Link>
            </header>
        </div>
    )
}