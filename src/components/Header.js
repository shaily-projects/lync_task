
import React, { useState } from 'react';
import logo from "../images/logo.svg";
import { Arrow, MenuIcon } from '../assets/icon'; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='container padding'>
            <div className='header-wrapper'>
                <a href='#'>
                    <img src={logo} alt="logoIcon" />
                </a>

                {/* Mobile Menu Icon */}
                <div className='mobile-menu-icon' onClick={toggleMenu}>
                    <MenuIcon />
                </div>

                {/* Navigation Menu */}
                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Documentation</a>
                        </li>
                        <li>
                            <a href='#'>Blogs</a>
                        </li>
                        <li>
                            <a href='#'>LYNC Portal</a>
                        </li>
                        <li>
                            <a href='#'>Request a demo</a>
                        </li>
                    </ul>
                </div>

                <div className='primary-wrapper'>
                    <a href='#' className='started-btn-primary'>
                        Get started
                        <Arrow />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;

