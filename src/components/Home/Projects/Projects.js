/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Projects.scss';
import feenixlab from '../../../images/projects/feenixlab.jpg';
import creative from '../../../images/projects/creative-agency.jpg';
import dynamic from '../../../images/projects/dynamic.jpg';
import kangaroo from '../../../images/projects/kangaroo.jpg';
import network from '../../../images/projects/network.jpg';
import travel from '../../../images/projects/travel.jpg';


const Projects = () => {
    return (
        <div className="Projects">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>LATEST <span>PROJECTS</span></h2>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <div className="image-box">
                                <img className="card-img-top" src={feenixlab} alt=""/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">MY Outsourcing Limited</h4>
                                <p className="role">Frontend & Backend</p>
                                <p className="card-text">Here I have designed the UI for their website according to their needs. Then I started creating websites from scratch. They didn't have a backend to control their website, so I developed a backend to control them later.</p>
                                <div className="technology mb-4"><span>PHP</span> <span>MySQL</span> <span>Node.js</span> <span>SCSS</span> <span>javaScript</span> <span>Bootstrap</span> <span>HTML</span></div>
                                <div className='text-right link'>
                                {/* <a href="" target="_blank" className="mr-3"><i className="fab fa-github"></i></a> */}
                                <a href="https://www.myolbd.com/" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <div className="image-box">
                                <img className="card-img-top" src={creative} alt=""/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Critave Agnecy</h4>
                                <p className="role">Frontend & Backend</p>
                                <p className="card-text">A simple single page web application(SPA). In this application, the user can login to receive the service of his choice and the admin can control the entire website from the admin panel.</p>
                                <div className="technology mb-4"><span>React</span> <span>MongoDb</span> <span>Node.js</span> <span>ExpressJS</span> <span>Firebase</span> <span>React-Bootstrap</span> <span>SCSS</span></div>
                                <div className='text-right link'>
                                <a href="https://github.com/asadsanto10/creative-agency-client" target="_blank" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://creative-agnecy.web.app/" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <div className="image-box">
                                <img className="card-img-top" src={dynamic} alt=""/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Dynamic It Solutions</h4>
                                <p className="role">Frontend & Backend</p>
                                <p className="card-text">Here I have designed the UI for their website according to their needs. Then I started creating websites from scratch.</p>
                                <div className="technology mb-4"><span>PHP</span> <span>MySQL</span><span>javaScript</span><span>jQuery</span> <span>SCSS</span> <span>Bootstrap</span> <span>HTML</span></div>
                                <div className='text-right link'>
                                {/* <a href="https://github.com/asadsanto10/creative-agency-client" target="_blank" className="mr-3"><i className="fab fa-github"></i></a> */}
                                <a href="https://dynamicits.us" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <div className="image-box">
                                <img className="card-img-top" src={kangaroo} alt=""/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Kangaroo Global Bangladesh</h4>
                                <p className="role">Frontend & Backend</p>
                                <p className="card-text">This is an education consultant's website. Here I have developed a WordPress theme. Here they have been developed based on the information of Education Consultant.</p>
                                <div className="technology mb-4"><span>WordPress</span> <span>MySQL</span><span>javaScript</span><span>jQuery</span> <span>SCSS</span> <span>Bootstrap</span></div>
                                <div className='text-right link'>
                                {/* <a href="https://github.com/asadsanto10/creative-agency-client" target="_blank" className="mr-3"><i className="fab fa-github"></i></a> */}
                                <a href="https://kangarooglobal.com.bd" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <div className="image-box">
                                <img className="card-img-top" src={network} alt=""/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Volunteer Network</h4>
                                <p className="role">Frontend & Backend</p>
                                <p className="card-text">A simple single page web application(SPA).In this application, the user will be able to participate in the work of his choice through login and the admin can control the entire website from the admin panel.</p>
                                <div className="technology mb-4"><span>React</span> <span>MongoDb</span> <span>Node.js</span> <span>ExpressJS</span> <span>Firebase</span> <span>React-Bootstrap</span> <span>SCSS</span></div>
                                <div className='text-right link'>
                                <a href="https://github.com/asadsanto10/volunteer-network-client" target="_blank" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://volunteer-network-3ff26.web.app/" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <div className="image-box">
                                <img className="card-img-top" src={travel} alt=""/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Travel Guru</h4>
                                <p className="role">Frontend & Backend</p>
                                <p className="card-text">A simple single page web application(SPA).In this application, the user can select a place according to his choice through login and book a room in that place as per the type of room he wants. According to the place, the user will also be able to see the map of that place.</p>
                                <div className="technology mb-4"><span>React</span> <span>MongoDb</span> <span>Node.js</span> <span>ExpressJS</span> <span>Firebase</span> <span>React-Bootstrap</span> <span>SCSS</span></div>
                                <div className='text-right link'>
                                <a href="https://github.com/asadsanto10/volunteer-network-client" target="_blank" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://travel-guru-master.web.app/" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;