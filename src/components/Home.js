import React from 'react';
import Typed from 'react-typed';
import Header from './Header';
import Footer from './Footer';
import me from '../img/me1.png';
import resume from '../doc/Mina-resume.docx';

function Home(){
    return (
        <div>
            <Header/>
            <div id="banner" className="banner-area">
                <div className="banner container-fluid">
                    <div className="row">
                        <div className="col-md-1 float-left"></div>
                        <div className="col-md-5 d-flex align-items-center float-left">
                            <div className="banner-left wow animated fadeInLeft" data-wow-delay="0.5sec">
                                <h4 className="">Hello, I'M <span className="theme-color">Mina Mahmood</span></h4>
                                
                                <h1 className="element"><Typed
                                strings={[
                                    'Full Stack Developer',
                                    'Web Developer']}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop >
                                    
                                </Typed></h1>

                                <p>Knack of building applications with front and back end operations.</p>
                                <a href="/hire-me" className="btn border-btn">Hire me</a>
                                <a href={resume} className="btn box-btn" download>Get Resume</a>
                            </div>
                        </div>
                        <div className="col-md-6 float-left">
                            <div className="banner-right">
                                <img src={me} alt="" className="wow animated fadeInRight" data-wow-delay="0.5sec"/>
                                <div className="banner-contact-link wow animated fadeInUp" data-wow-delay="0.5sec">
                                    <a href="https://github.com/Minamahmood"><i className="fab fa-github text-primary"></i></a>
                                    <a href="https://www.linkedin.com/in/mina-mahmood-985711195/"><i className="fab fa-linkedin-in text-info"></i></a>
                                    <a href="mailto:minamahmood83@gmail.com"><i className="fa fa-envelope text-primary"></i></a>
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

export default Home;