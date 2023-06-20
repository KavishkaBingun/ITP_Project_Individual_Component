import React from "react";
import "../footer.css";

function Footer(){
    return(
        <footer className="nav-footer navbar text-dark pt-5 pb-4">
            <div className="container text-md-left">
                <div className="row text-md-left">
                
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-info">About Us</h5>
                        <hr className="color-hr mb-4"></hr>
                        <p>We are the benthota bake house and we provide our clients with a variety of menu options. We have a staff of chefs, waiter and 
                            employees who work with us to ensure that our customers have a nice and memorable dining experience.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Company</h5>
                        <hr className="color-hr mb-4"></hr>
                        <p>
                            <a href="#" className="footer-nav-link text-dark" style={{textDecoration:'none'}}>Our Story</a>
                        </p>
                        <p>
                            <a href="#" className="footer-nav-link text-dark" style={{textDecoration:'none'}}>Careers</a>
                        </p>
                        <p>
                            <a href="#" className="footer-nav-link text-dark" style={{textDecoration:'none'}}>Terms of Services</a>
                        </p>
                        <p>
                            <a href="#" className="footer-nav-link text-dark" style={{textDecoration:'none'}}>Help</a>
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Let us help</h5>
                        <hr className="color-hr mb-4"></hr>
                        <p>
                            <a href="#" className="footer-nav-link text-dark" style={{textDecoration:'none'}}>Your Account</a>
                        </p>
                        <p>
                            <a href="#" className="footer-nav-link text-dark" style={{textDecoration:'none'}}>Your Orders</a>
                        </p>
                        <p>
                            <a href="#" className="footer-nav-link text-dark" style={{textDecoration:'none'}}>Your Content</a>
                        </p>
                        <p>
                            <a href="#" className="footer-nav-link text-dark" style={{textDecoration:'none'}}>FAQ</a>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Contact</h5>
                        <hr className="color-hr mb-4"></hr>
                        <p>
                            <i className="fas fa-home mr-3"></i> &nbsp; &nbsp;Kandy road, Peradeniya
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> &nbsp; &nbsp;info@benthotabakehouse.com
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> &nbsp; &nbsp;+94 8187123536
                        </p>
                        <p>
                            <i className="fas fa-print mr-3"></i> &nbsp; &nbsp;+94 1134879545
                        </p>  
                    </div>
                    <hr className="mb-4"></hr>
                </div>

                
                <div className="row d-flex mx-auto text-center">
                    <div>
                        <p>
                            Copyright 2023 All Rights Reserved By :
                            <a href="#" style={{textDecoration:'none'}}>
                                <strong className="text-info"> Benthota Bake House</strong>
                            </a>
                        </p>
                    </div>
                

                    <div className="socialmedia row d-flex mx-auto">
                        <div className="text-center">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="text-dark"><i className="fab fa-facebook fa-2x"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="text-dark"><i className="fab fa-twitter fa-2x"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="text-dark"><i className="fab fa-google-plus fa-2x"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="text-dark"><i className="fab fa-linkedin-in fa-2x"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="text-dark"><i className="fab fa-youtube fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>   
                </div>
            </div>
        </footer>
    )
}

export default Footer;