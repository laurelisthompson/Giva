import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div class="main-page">
            <nav class="site-nav">
                <div>
                    <div>
                        <div class="nav-button">
                            <button class="giva-btn">Giva</button>
                        </div>
                        <div class="lend-dropdown">
                            <button class="lend-dropbtn">Lend</button>
                            <div class="dropdown-content">
                                <h1>Categories</h1>
                                <Link to={'/loans/women'}>Women</Link>
                                <Link to={'/loans/agriculture'}>Agriculture</Link>
                                <Link to={'/loans/education'}>Education</Link>
                                <Link to={'/loans/refugee'}>Refugee</Link>
                                <Link to={'/loans/eco'}>Eco-friendly</Link>
                                <Link to={'/loans/domestic'}>Kiva U.S.</Link>
                                <Link to={'/loans/livestock'}>Livestock</Link>
                                <Link to={'/loans/arts'}>Arts</Link>
                                <Link to={'/loans'}>View All</Link>
                            </div>
                        </div> 
                    </div>
                </div>
                <div>
                    <div class="nav-button-right">
                        <button class="giva-btn">Borrow</button>
                    </div>
                    <div class="about-dropdown">
                        <button class="about-dropbtn">About</button>
                        <div class="dropdown-content">
                            <button>About Us</button>
                            <button>How Kiva Works</button>
                            <button>Where Kiva Works</button>
                            <button>Impact</button>
                            <button>Leadership</button>
                            <button>Finances</button>
                            <button>Press</button>
                            <button>Due diligence</button>
                        </div>
                    </div>
                    <div class="nav-button-right">
                        <Link to={"/signin"}>
                            <button class="giva-btn" type="button">
                                Sign in
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            <section>
                <iframe class="video-link" width="560" height="315" src="https://www.youtube.com/embed/WCraaM6PAos?autoplay=1?mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <div>
                <div class="impact-steps-title">
                    <h1>Three Steps to Impact</h1>
                    <span>Set your commitment once, Kiva will make sure</span>
                    <span>every dollar is lent to COVID-19 impacted</span>
                    <span>individuals and businesses.</span>
                </div>
                <div class="impact-steps">
                    <div class="step">
                        <img src={choose} alt="choose-icon"/>
                        <h1>Choose</h1>
                        <span>Choose a monthly amount to go</span>
                        <span>toward COVID-19 relief that works</span>
                        <span>for you.</span>
                    </div>
                    <div class="step">
                        <img src={check} alt="check-icon"/>
                        <h1>Check</h1>
                        <span>Receive a monthly impact report</span>
                        <span>explaining how your money helped.</span>
                    </div>
                    <div class="step">
                        <img src={grow} alt="grow-icon"/>
                        <h1>Grow</h1>
                        <span>As you get repaid, Kiva will re-lend</span>
                        <span>your money and multiply</span>
                        <span>your impact.</span>
                    </div>
                </div>
                {/* <img src={dotted-background} alt="dots" class="dots" /> */}
            </div>
            <div class="why-kiva">
            </div>
            <div>
                <div><Link to={'/loans/women'}>Women</Link></div>
                <div><Link to={'/loans/agriculture'}>Agriculture</Link></div>
                <div><Link to={'/loans/education'}>Education</Link></div>
                <div><Link to={'/loans/refugee'}>Refugee</Link></div>
                <div><Link to={'/loans/eco'}>Eco-friendly</Link></div>
                <div><Link to={'/loans/domestic'}>Kiva U.S.</Link></div>
                <div><Link to={'/loans/livestock'}>Livestock</Link></div>
                <div><Link to={'/loans/arts'}>Arts</Link></div>
                <div><Link to={'/loans'}>View All</Link></div>
            </div>
        </div>
    );

    return sessionLinks();
};

export default Greeting;