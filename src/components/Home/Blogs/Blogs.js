import React from 'react';
import './Blogs.css';
import blog1 from '../../../images/blogs/blog1.jpg';
import blog2 from '../../../images/blogs/blog2.png';

const Blogs = () => {
    return (
        <div className="Blogs">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>MY <span>BLOG</span></h2>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={blog2} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Five Things You Should Know Before You Jumping Into ReactJS <span aria-label="" role="img">🔯</span></h4>
                                <p className="card-text">Every front end developer and web developer knows how painful it is to write the same code at multiple places. If they need to add a button at multiple pages they are forced to do... </p>
                                <a href="https://medium.com/@tayab_pabel/five-things-you-should-know-before-you-jumping-into-reactjs-54f1cb3ff565" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div> */}
                    <h4>up comeing</h4>
                </div>
            </div>
        </div>
    );
};

export default Blogs;