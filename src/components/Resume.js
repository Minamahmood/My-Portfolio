import React, { useEffect } from 'react';
import $ from 'jquery';
import Header from './Header';
import Footer from './Footer';
import project1 from '../img/project1.jpeg';
import project2 from '../img/project2.jpeg';
import project3 from '../img/project3.jpeg';
import project4 from '../img/project4.jpeg';
import project5 from '../img/project5.jpeg';
import project6 from '../img/project6.jpeg';

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
                                                    <h6>Dijlah University Baghdad, Iraq</h6>
                                                    <p>Bachelor of Science (B.S.) Degree in Computer Science</p>
                                                    <span className="badge p-2">2009-2013</span>
                                                </li>                                                
                                                <li>
                                                    <h6>University of California, Berkeley</h6>
                                                    <p>Full stuck web developer (boot camp) </p>
                                                    <span className="badge p-2">2021-2021</span>
                                                </li>
                                            </ul>
                                            
                                            <ul id="workHistory" style={{display: styles.displayNone}}>                                                
                                                <li>
                                                    <h6>AVESTA GROUP., Erbil, Iraq</h6>
                                                    <p>Front-end Web Developer</p>
                                                    <span className="badge p-2">2015-2017</span>
                                                </li>
                                                <li>
                                                    <h6>CSAT solutions, Houston, Texas</h6>
                                                    <p>Failure Analysis Tech</p>
                                                    <span className="badge p-2">2017-2019</span>
                                                </li>
                                            </ul>
                                            
                                            <ul id="programmingSkill" style={{display: styles.displayNone}}>
                                                <li>
                                                    <h6>JavaScript</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width100}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6>React Native</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width100}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6>Node JS</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width100}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6>Core Java</h6>
                                                    <div className="w3-border theme-bg">
                                                        <div className="barfiller" style={{width: styles.width100}}></div>
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
                                                        <div className="barfiller" style={{width: styles.width100}}></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            
                                            <ul id="project" style={{display: styles.displayNone}}>
                                                <div className="row">
                                                    <div className="col-md-6 float-left mb-4">
                                                        <div className="demo-project">
                                                            <div className="demo-project-img d-flex align-items-center">
                                                                <img src={project1} alt="" />
                                                            </div>
                                                            <div className="demo-project-desc">
                                                                <h2>Auto Tracker</h2>
                                                                <p>Usege: this is an auto tracking system , where users can register their vehicle , view the list of their vehicle and drivers , also can do sign in and sign out </p>
                                                                <a className="box-btn" href="https://mysterious-beyond-07295.herokuapp.com/user/login">View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-6 float-left mb-4">
                                                        <div className="demo-project">
                                                            <div className="demo-project-img d-flex align-items-center">
                                                                <img  src={project2} alt="" />
                                                            </div>
                                                            <div className="demo-project-desc">
                                                                <h2>Dish</h2>
                                                                <p>Usage:used for food recipe search and to have all about the Calories, Dite Label and Health Labels with the time frame</p>
                                                                <a className="box-btn" href=" https://fadmin8989.github.io/Dish01">View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-6 float-left mb-4">
                                                        <div className="demo-project">
                                                            <div className="demo-project-img d-flex align-items-center">
                                                                <img  src={project3} alt="" />
                                                            </div>
                                                            <div className="demo-project-desc">
                                                                <h2>Day Schedule</h2>
                                                                <p>Use this to schedule your day</p>
                                                                <a className="box-btn" href="https://minamahmood.github.io/Taskmaster/">View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-6 float-left mb-4">
                                                        <div className="demo-project">
                                                            <div className="demo-project-img d-flex align-items-center">
                                                                <img src={project4} alt="" />
                                                            </div>
                                                            <div className="demo-project-desc">
                                                                <h2>WEATHER-DASHBOARD</h2>
                                                                <p>Use this to know the weather in any city. if the user has a vacation plan, the user will be able to check the weather in advance</p>
                                                                <a className="box-btn" href="https://minamahmood.github.io/Weather-Dashboard/">View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-6 float-left mb-4">
                                                        <div className="demo-project">
                                                            <div className="demo-project-img d-flex align-items-center">
                                                                <img src={project5} alt="" />
                                                            </div>
                                                            <div className="demo-project-desc">
                                                                <h2>Team Profile Generator</h2>
                                                                <p>The Team Profile Generator is a command line input application run in Node that requests information from the user about members of an employee team and generates an HTML file displaying that information. </p>
                                                                <a className="box-btn" href="https://github.com/Minamahmood/Team-Profile-Generator">View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-6 float-left mb-4">
                                                        <div className="demo-project">
                                                            <div className="demo-project-img d-flex align-items-center">
                                                                <img src={project6} alt="" />
                                                            </div>
                                                            <div className="demo-project-desc">
                                                                <h2>Code-Quiz</h2>
                                                                <p>This website is used to test your skill in js,html,css each time you git a answer wrong you lose time. try to git high score</p>
                                                                <a className="box-btn" href="https://minamahmood.github.io/Code-Quiz/">View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                            
                                            <ul id="interest" style={{display: styles.displayNone}}>
                                                <li>
                                                    <h6>Cooking</h6>
                                                </li>
                                                <li>
                                                    <h6>Interior Design</h6>
                                                </li>
                                                <li>
                                                    <h6>Traveling</h6>
                                                </li>
                                                <li>
                                                    <h6>Sports</h6>
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