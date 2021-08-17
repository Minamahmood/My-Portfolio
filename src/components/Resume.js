import React, { useEffect } from 'react';
import $ from 'jquery';
import Header from './Header';
import Footer from './Footer';

function Resume(){
    useEffect(() => {
        var $resumeLi = $('.resumeLi').click(function(){
            $resumeLi.removeClass('selected-bullet');
            $(this).addClass('selected-bullet');
        });
    
      }, []);

    const styles = {
        displayNone: "none",
        width80: "80%",
        width85: "85%",
        width90: "90%",
        width95: "95%",
        width100: "100%"
    };
    
    function resume(id){
        $("#education").hide();
        $("#workHistory").hide();
        $("#programmingSkill").hide();
        $("#project").hide();
        $("#interest").hide();
        $("#"+id).show(500);
    }

    return (
        <div>
            <Header/>
            <div id="resume" className="resume-area">
                <div className="resume container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-12 float-left">
                            <div className="common-header">
                                <h3>Resume</h3>
                                <p>My formal Bio Details</p>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 float-left">
                            <div className="resume-content wow animated fadeInUp" data-wow-delay="0.5sec">
                                <div className="row">
                                    <div className="col-md-4 float-left">
                                        <div className="resume-left">
                                            <ul className="resume-ul-left">
                                                <li></li>
                                                <li><i className="fas fa-graduation-cap"></i></li>
                                                <li><i className="fas fa-history"></i></li>
                                                <li><i className="fas fa-laptop-code"></i></li>
                                                <li><i className="fas fa-chart-bar"></i></li>
                                                <li><i className="fas fa-heart"></i></li>
                                                <li></li>
                                            </ul>
                                            <ul className="resume-ul-right">
                                                <li></li>
                                                <li className="selected-bullet resumeLi" onClick={() => resume('education')}><span className="bullet"></span>Education</li>
                                                <li className="resumeLi"  onClick={() => resume('workHistory')}><span className="bullet"></span>Work History</li>
                                                <li className="resumeLi"  onClick={() => resume('programmingSkill')}><span className="bullet"></span>Programming Skills</li>
                                                <li className="resumeLi"  onClick={() => resume('project')}><span className="bullet"></span>Projects</li>
                                                <li className="resumeLi"  onClick={() => resume('interest')}><span className="bullet"></span>Interests</li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8 float-left">
                                        <div className="resume-right">
                                            <ul id="education">
                                                <li>
                                                    <h6>CSAT SOLUTIONS, INC., Houston, Texas</h6>
                                                    <p>Failure Analysis Tech</p>
                                                    <span className="badge p-2">2017-2019</span>
                                                </li>
                                                <li>Bachelor of Science (B.S.) Degree in Computer Science | 

                                                    <h6> Dijlah University Baghdad, Iraq</h6>
                                                    <p>Bachelor of Sciencein CSE</p>
                                                    <span className="badge p-2">1009-2013</span>
                                                </li>
                                            </ul>
                                            
                                            <ul id="workHistory" style={{display: styles.displayNone}}>                                                
                                                <li>
                                                    <h6>AVESTA GROUP., Erbil, Iraq</h6>
                                                    <p>Web Developer</p>
                                                    <span className="badge p-2">2015-2017</span>
                                                </li>
                                            </ul>
                                            
                                            <ul id="programmingSkill" style={{display: styles.displayNone}}>
                                                <li>
                                                    <h6>JavaScript</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width80}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6>React Native</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width90}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6>Node JS</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width85}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6>Core Java</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width85}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6>Html</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width100}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6>CSS</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width95}}></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            
                                            <ul id="project" style={{display: styles.displayNone}}>
                                                <li>
                                                    <h6>University of Legon Accra, Ghana</h6>
                                                    <p>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</p>
                                                    <span className="badge p-2">2014-2018</span>
                                                </li>
                                                <li>
                                                    <h6>University of Legon Accra, Ghana</h6>
                                                    <p>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</p>
                                                    <span className="badge p-2">2019-2020</span>
                                                </li>
                                                <li>
                                                    <h6>University of Legon Accra, Ghana</h6>
                                                    <p>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</p>
                                                    <span className="badge p-2">2007-2012</span>
                                                </li>
                                            </ul>
                                            
                                            <ul id="interest" style={{display: styles.displayNone}}>
                                                <li>
                                                    <h6>University of Legon Accra, Ghana</h6>
                                                    <p>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</p>
                                                    <span className="badge p-2">2014-2018</span>
                                                </li>
                                                <li>
                                                    <h6>University of Legon Accra, Ghana</h6>
                                                    <p>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</p>
                                                    <span className="badge p-2">2019-2020</span>
                                                </li>
                                                <li>
                                                    <h6>University of Legon Accra, Ghana</h6>
                                                    <p>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</p>
                                                    <span className="badge p-2">2007-2012</span>
                                                </li>
                                            </ul>
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

export default Resume;