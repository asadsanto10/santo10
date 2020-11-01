import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import { useState } from 'react';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const sticky = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', sticky);
    return (
        <div className={navbar ? 'Navbar navActive' : 'Navbar'}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="santo logo"/>
                    </Link>
                    <Link to="#" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/"><span>HOME</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/about"><span>ABOUT</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/projects"><span>PROJECTS</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/blogs"><span>BLOGS</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/contact"><span>CONTACT</span></Link>
                        </li>
                        </ul>
                        <a className="btn" style={{background: '#0d2c4c', borderColor: "#56adc4"}} href="https://drive.google.com/file/d/1QwZ9uvaWHel82eszgfEXr_avjKbIa6yo/view" target="_blank" rel="noopener noreferrer" download>RESUME</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;