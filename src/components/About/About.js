import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';
import about from '../../images/about.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="About">
            <Navbar/>
            <div className="container py-5">
                <div className="header text-center">
                    <h2>ABOUT <span>ME</span></h2>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 text-center py-4">
                        <img className="img-fluid profile-image" src={about} alt=""/>
                        <p className="description mt-4">I would like to devote all of my knowledge, skill and expertise to my profession in such a prosperous way. Where working environment, responsibilities and would be enlightened. Providing the best performance by my youth and energy, I could have the opportunity to strengthen the organization and build up my own career also.</p>
                        <Link to="/contact" className="btn mr-1">Contact</Link>
                        <Link to="/projects" className="btn ml-1">My Project</Link>
                    </div>
                    <div className="col-md-7 skills pt-3">
                        <h2 className="mb-4">SKILLS</h2>
                        <div className="skills">
                            <h4 className="mb-3">Expertise</h4>
                            <p>React <span>&#9679;</span> React Router <span>&#9679;</span> JavaScript <span>&#9679;</span> ES6 <span>&#9679;</span> MongoDB <span>&#9679;</span> Material Ui <span>&#9679;</span> SCSS <span>&#9679;</span> Bootstrap <span>&#9679;</span> SCSS <span>&#9679;</span> CSS <span>&#9679;</span> HTML</p>

                            <h4 className="mt-4 mb-3">COMFORTABLE</h4>
                            <p>Node.js <span>&#9679;</span> Express.js <span>&#9679;</span> Netlify <span>&#9679;</span> PHP <span>&#9679;</span> Firebase <span>&#9679;</span> Heroku <span>&#9679;</span> WordPress <span>&#9679;</span> jQuery</p>

                            <h4 className="mt-4 mb-3">FAMILIAR</h4>
                            <p>Redux <span>&#9679;</span> Laravel <span>&#9679;</span>codeigniter <span>&#9679;</span> graphQl <span>&#9679;</span> getsbyjs</p>

                            <h4 className="mt-4 mb-3">Tools</h4>
                            <p>Git <span>&#9679;</span> GitHub <span>&#9679;</span> Visual Studio Code <span>&#9679;</span> Atom <span>&#9679;</span> npm <span>&#9679;</span> Chrome Dev Tools <span>&#9679;</span> xampp <span>&#9679;</span>wampp <span>&#9679;</span>filezilla</p>

                            <h4 className="mt-4 mb-3">Design Tools</h4>
                            <p>Adoebe Photoshop <span>&#9679;</span> Adoebe Illustrator <span>&#9679;</span> Adobe premiere pro</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;