import React from 'react';
import { Link } from "react-router-dom";
import './TopMenu.css';
import logo from './simpleHeader.png';

export default function TopMenu() {
    return (
        <div id="TopMenu">
            <Link to="/">
                <img src={logo} id="logo" alt="Logo" />
            </Link>
        </div>
    )
}