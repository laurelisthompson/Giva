import React from 'react';
import { Link } from 'react-router-dom';

class LivestockLoanIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchAllLoans()
    };

    render() {
        const { loans } = this.props;
        return (
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
                    <div class="profile-dropdown">
                        <button class="lend-dropbtn">Profile</button>
                        <div class="dropdown-content">
                            <Link to={'/profile'}>Profile</Link>
                            <button onClick={logout}>Sign Out</button>
                        </div>
                    </div>
                </nav>
                <div class="loan-headings">
                    <p><Link to={'/loans'}>All Loans</Link> - Livestock</p>
                    <h1>Livestock</h1>
                    <span>
                        Cows, pigs and other animals have the potential to dramatically increase 
                        farming incomes, but the initial cost can be a barrier. Help farmers invest 
                        in their futures.
                    </span>
                </div>
                <div class="loan-flex">
                    {loans.map(loan => {
                        if (loan.type_category == "Livestock") return (
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
        )
    };
}

export default LivestockLoanIndex;