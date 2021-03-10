import React from 'react';
import { Link } from 'react-router-dom';

class AgricultureLoanIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchAllLoans()
    };

    render() {
        const { loans, logout } = this.props;
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
                    <div>
                        <div class="about-dropdown">
                            <Link to={'/about'}>
                                <button class="about-dropbtn">About</button>
                            </Link>
                        </div>
                        <div class="profile-dropdown">
                            <Link to={'/profile'}>
                                <button class="lend-dropbtn">Profile</button>
                            </Link>
                            <div class="dropdown-content">
                                <Link to={'/profile'}>Profile</Link>
                                <button onClick={logout}>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="loan-headings">
                    <p><Link to={'/loans'}>All Loans</Link> - Agriculture</p>
                    <h1>Agriculture</h1>
                    <span>
                        Farmers face many challenges like unpredictable weather and
                        market prices, and are often forced to choose between investing
                        in their crops and fulfilling basic needs for their families. Your
                        support keeps their crops growing and their livelihoods stable.
                    </span>
                </div>
                <div class="loan-flex">
                    {loans.map(loan => {
                        if (loan.type_category == "Agriculture") return (
                            <div class="loans">
                                <div class="loan-img">
                                    <img src={loan.thumbnailUrl} />
                                </div>
                                <h1>{loan.loan_name}</h1>
                                <p class="loan-loc">{loan.location}</p>
                                <p class="loan-des">{loan.loan_description}</p>
                                <div class="progress-container">
                                    <div class="current-progress"></div>
                                </div>
                                <p class="loan-amt">${loan.total_amount}</p>
                                <div class="btn">
                                    <button class="price-btn">$25</button>
                                    <button class="lend-btn">Lend Now</button>
                                </div>
                            </div>
                        )
                    })}
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
                                    <button class="about-dropbtn">About</button>
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
                    <div class="loan-headings">
                        <p><Link to={'/loans'}>All Loans</Link> - Agriculture</p>
                        <h1>Agriculture</h1>
                        <span>
                            Farmers face many challenges like unpredictable weather and
                            market prices, and are often forced to choose between investing
                            in their crops and fulfilling basic needs for their families. Your
                            support keeps their crops growing and their livelihoods stable.
                    </span>
                    </div>
                    <div class="loan-flex">
                        {loans.map(loan => {
                            if (loan.type_category == "Agriculture") return (
                                <div class="loans">
                                    <div class="loan-img">
                                        <img src={loan.thumbnailUrl} />
                                    </div>
                                    <h1>{loan.loan_name}</h1>
                                    <p class="loan-loc">{loan.location}</p>
                                    <p class="loan-des">{loan.loan_description}</p>
                                    <div class="progress-container">
                                        <div class="current-progress"></div>
                                    </div>
                                    <p class="loan-amt">${loan.total_amount}</p>
                                    <div class="btn">
                                        <button class="price-btn">$25</button>
                                        <button class="lend-btn">Lend Now</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            );
    };
            
}

export default AgricultureLoanIndex;