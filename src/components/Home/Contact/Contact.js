import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="container">
                <div className="header text-center">
                    <h2>CONTACT <span>ME</span></h2>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-7 mt-md-0 mt-5">
                        <form action="#" method="POST">
                            <div className="form-group">
                                <input type="text" placeholder="Name" name="name" className="form-control p-4"/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" name="email" className="form-control p-4"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control p-4" rows="4" placeholder="Message" name="message"></textarea>
                            </div>
                            <input type="submit" className="btn btn-block py-3" value="SEND"/>
                        </form>
                    </div>
                    <div className="col-md-5 mt-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h4>Address</h4>
                                <p>Kihlgaon, Dhaka, Bangladesh</p>
                                <h4 className="pt-3">Email</h4>
                                <p><a href="mailto: asad.santo.20@gmail.com" className="text-white">asad.santo.20@gmail.com</a></p>
                                <h4 className="pt-3">Phone</h4>
                                <p><a href="tel:+8801722-044555" className="text-white">+88 01722-044555</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;