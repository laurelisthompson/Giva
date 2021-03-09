import React from 'react';
import { Link } from 'react-router-dom';

class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const loggedIn = Boolean(this.props.session.id);

        return loggedIn ? (
            <div>
                <nav class="site-nav">
                    <div>
                        <div>
                            <div class="lend-dropdown">
                                <Link to={"/dashboard"}>
                                    <button class="lend-dropbtn" type="button">
                                        Giva
                                    </button>
                                </Link>
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
                    <div class="about-dropdown">
                        <Link to={'/about'}>
                            <button class="about-dropbtn">
                                About
                            </button>
                        </Link>
                    </div>
                    <div class="profile-dropdown">
                        <button class="lend-dropbtn">Profile</button>
                        <div class="dropdown-content">
                            <Link to={'/profile'}>Profile</Link>
                            <button onClick={logout}>Sign Out</button>
                        </div>
                    </div>
                </nav>
                <nav class="profile-nav">
                    <div class="profile-upper-tabs">
                        <button class="selected-button">About Giva</button>
                        <a href="https://laurelisthompson.github.io/" target="_blank">Portfolio</a>
                        <a href="https://laurelisthompson.github.io/" target="_blank">GitHub</a>
                        <a href="https://laurelisthompson.github.io/" target="_blank">LinkedIn</a>
                        <a href="https://angel.co/u/laurelisthompson" target="_blank">AngelList</a>
                    </div>
                </nav>
                <div>
                    <h1>About This Project</h1>
                    <p>Giva is a single page web app clone of the loan</p>
                    <p>website kiva, and was created by Lauren Thompson.</p>
                    <p>Giva was built with a Ruby on Rails backend and a</p>
                    <p>React/Redux frontend.</p>
                    <button></button>
                </div>
            </div>
        ) : (
                <div>
                    <nav class="site-nav">
                        <div>
                            <div>
                                <div class="lend-dropdown">
                                    <Link to={"/dashboard"}>
                                        <button class="lend-dropbtn" type="button">
                                            Giva
                                    </button>
                                    </Link>
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
                            <div class="about-dropdown">
                                <Link to={'/about'}>
                                    <button class="about-dropbtn">
                                        About
                                    </button>
                                </Link>
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
                    <nav class="profile-nav">
                        <div class="profile-upper-tabs">
                            <button class="selected-button">About Giva</button>
                            <a href="https://laurelisthompson.github.io/" target="_blank">Portfolio</a>
                            <a href="https://laurelisthompson.github.io/" target="_blank">GitHub</a>
                            <a href="https://laurelisthompson.github.io/" target="_blank">LinkedIn</a>
                            <a href="https://angel.co/u/laurelisthompson" target="_blank">AngelList</a>
                        </div>
                    </nav>
                    <div>
                        <h1>About This Project</h1>
                        <p>Giva is a single page web app clone of the loan</p>
                        <p>website kiva, and was created by Lauren Thompson.</p>
                        <p>Giva was built with a Ruby on Rails backend and a</p>
                        <p>React/Redux frontend.</p>
                        <button></button>
                    </div>
                </div>
            );
    };

}

export default AboutContainer;