import React from 'react';
import Typed from 'react-typed';
import Header from './Header';
import Footer from './Footer';

function ContactMe(){
    return (
        <div>
            <Header/>
            <div id="contactUs" className="contact-area">
                <div className="contact container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-12 float-left">
                            <div className="common-header">
                                <h3>Contact Me</h3>
                                <p>Let's Keep In Touch</p>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 float-left">
                            <div className="contact-content">
                                <div className="row">
                                    <div className="col-md-6 d-flex align-items-center theme-bg float-left">
                                        <div className="contact-left">
                                        <h2 className="element"><Typed
                                            strings={[
                                                "Get In Touch",
                                                "Email Me and..",
                                                "Get Your Job Done."
                                            ]}
                                            typeSpeed={40}
                                            backSpeed={50}
                                            loop >
                                            
                                        </Typed></h2>
                                            <div className="contact-contact-link">
                                                <a href="https://github.com/Minamahmood"><i className="fab fa-github text-primary"></i></a>
                                                <a href="https://www.linkedin.com/in/mina-mahmood-985711195/"><i className="fab fa-linkedin-in text-info"></i></a>
                                                <a href="mailto:minamahmood83@gmail.com"><i className="fa fa-envelope text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 bg-warning float-left">
                                        <div className="contact-right">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="email" className="form-control" id="name" name="name" placeholder=""/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" id="email" name="email" placeholder=""/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="message">Message</label>
                                                    <textarea className="form-control" id="message" name="message" rows="3"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <button type="button" className="btn btn-success">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ContactMe;