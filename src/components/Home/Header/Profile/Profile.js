import React from 'react';
import './Profile.scss';
import profileImage from '../../../../images/santo.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="Profile container py-5">
            <div className="row d-flex justify-content-center align-items-center my-md-5 my-0">
                <div className="col-lg-7 pl-lg-5 pl-2 order-1 order-lg-0 py-4 py-md-5 text-left text-center text-md-left animate__animated animate__fadeInDown">
                    <p className="hello">Hello! My name is</p>
                    <h1 className="name">Asaduzzaman Santo</h1>
                    <h3 className="designation mt-2">Web Developer</h3>
                    <p className="description mt-3 mt-md-4 mb-3">I am working as a web developer. I like to learn about new things or new technologies and I like to learn on my own. I am familiar to work with React, Nodejs, javaScript MongoDB, Firebase, PHP, MySQL, SCSS etc. I am always ready to learn if I have to work outside of this because learning something new is my fashion.</p>
                    <div className="social-links my-3">
                        <a href="https://github.com/asadsanto10" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/asadsanto10" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://medium.com/@asad.santo.20" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium-m"></i></a>
                        <a href="https://www.facebook.com/Asad.santo.10" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/asad_santo_10" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </div>
                    <a className="btn mr-1" href="https://drive.google.com/file/d/1QwZ9uvaWHel82eszgfEXr_avjKbIa6yo/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>Get Resume</a>
                    <Link to="/about" className="btn ml-1">About Me</Link>
                </div>
                <div className="col-lg-5 d-flex justify-content-center animate__animated animate__fadeInUp">
                    <img className="img-fluid animate__animated animate__delay-1s animate__bounceIn" src={profileImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Profile;