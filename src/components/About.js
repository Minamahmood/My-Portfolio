import React from 'react';
import Header from './Header';
import Footer from './Footer';
import me from '../img/mina.png';
import resume from '../doc/Mina-resume.docx';

function About(){
    return (
        <div>
            <Header/>
            
            <div id="aboutMe" className="about-area">
                <div className="about container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-12 float-left">
                            <div className="common-header">
                                <h3>About Me</h3>
                                <p>Why Choose Me?</p>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 float-left">
                            <div className="about-content wow animated fadeInUp" data-wow-delay="0.5sec">
                                <div className="row">
                                    <div className="col-md-6 float-left">
                                        <div className="about-left">
                                            <img src={me} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 float-left">
                                        <div className="about-right">
                                            <p>I am a junior web developer with good knowledge of front-end techniques. I recently earned a certificate in full-stack development from Berkeley Bootcamp with newly developed skills in javascript, CSS, React.js, and responsive web design. I love structure and order and I also stand for quality. Rigidity of workflow is of utmost importance to me, as well as quality control. I also enjoy sharing responsibility of tasks in order to maximize efficiency.</p>
                                            
                                            <ul>
                                                <li><i className="fas fa-check-square"></i>Full Stack web development</li>
                                                <li><i className="fas fa-check-square"></i>Interactive Front End as per the design</li>
                                                <li><i className="fas fa-check-square"></i>React and React Native</li>
                                                <li><i className="fas fa-check-square"></i>Custom template design using html, css and JavaScript</li>
                                                <li><i className="fas fa-check-square"></i>Backend development and REST API implementation</li>
                                                <li><i className="fas fa-check-square"></i>Third party API integration and enhancement</li>
                                            </ul>
                                            
                                            <a href="/hire" className="btn border-btn">Hire me</a>
                                            <a href={resume} className="btn box-btn" download>Get Resume</a>
                                            
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

export default About;