import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

import logo from './header.png';
import { ReactComponent as Facebook } from './icon/facebook-icon.svg';
import { ReactComponent as Twitter } from './icon/twitter-icon.svg';
import { ReactComponent as Instagram } from './icon/instagram-icon.svg';
import { ReactComponent as LinkedIn } from './icon/linkedin-icon.svg';

export default function Header() {
    return (
        <div className="header">
            <header>
                <nav>
                    <ul>
                        <li>À propos</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li><a href="https://www.facebook.com/Pearl.Marine"><Facebook className="icon" /></a></li>
                        <li><a href="https://twitter.com/marindodouss_"><Twitter className="icon" /></a></li>
                        <li><a href="/"><Instagram className="icon" /></a></li>
                        <li><a href="https://www.linkedin.com/in/mrnroch/"><LinkedIn className="icon" /></a></li>
                    </ul>
                </nav>
                <Link to="/a"><img src={logo} alt="Logo" /></Link>
            </header>
        </div>
    )
}