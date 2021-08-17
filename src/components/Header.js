import React, { useEffect }  from 'react';
import $ from 'jquery';

function Header() {
    function goToTop(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    useEffect(() => {
        window.addEventListener('load', handler);

        document.addEventListener("DOMContentLoaded", function(event) { 
            $("#collapse-nav-menu").click(function(){
                $("#nav ul").toggle(500);
            });
        });
    }, []);

    function handler(){
        $(".preloader").fadeOut();
    }

    return(
        <div>            
            <button type="button" className="wow animated fadeInDown" data-wow-delay="0.3sec" onClick={goToTop} id="myBtn" title="Go to top"><i className="fas fa-angle-double-up"></i></button>
            
            <div className="container">
                <div className="preloader">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className="header-area header-area2">
                <div className="container">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-2 float-left">
                                <div className="logo">
                                    <a href="/">MINA</a>
                                </div>
                            </div>
                            <div className="col-md-10 float-right">
                            <button id="collapse-nav-menu"><i className="fas fa-bars"></i></button>
                                <div className="nav d-flex justify-content-center" id="nav">
                                    <ul id="nav-menu">
                                        <li className="scroll"><a href="/home">Home</a></li>
                                        <li className="scroll"><a href="/about">About Me</a></li>
                                        <li className="scroll"><a href="/resume">Resume</a></li>
                                        <li className="scroll"><a href="/contact-me">Contact Me</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;