import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import logo from './header.png';

export default function Header() {
    return (
        <Link to="/a"><img src={logo} alt="Logo" /></Link>
    )
}