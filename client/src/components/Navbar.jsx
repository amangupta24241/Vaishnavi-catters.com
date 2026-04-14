import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <nav id="navibar" style={{ 
                background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.8)',
                padding: isScrolled ? '1rem 5%' : '1.5rem 5%'
            }}>
                <Link id="logo" to="/">Vaishnavi Catters.com</Link>
                <div className="nav-links">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                    <Link to="/booking" className={location.pathname === '/booking' ? 'active' : ''}>Book Now</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search menu..." />
                    <button aria-label="Search">Search</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
