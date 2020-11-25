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
        return (
            <div>
                <nav class="site-nav">
                    <div>
                        <div>
                            <div class="nav-button">
                                <Link to={'/dashboard'}>Giva</Link>
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
                    <div class="lend-dropdown">
                        <button class="lend-dropbtn">Profile</button>
                        <div class="dropdown-content">
                            <Link to={'/profile'}>Profile</Link>
                            <button onClick={logout}>Sign Out</button>
                        </div>
                    </div>
                </nav>
                <div>
                    <p><Link to={'/loans'}>All Loans</Link> - Agriculture</p>
                    <h1>Agriculture</h1>
                    <p>
                        Farmers face many challenges like unpredictable weather and 
                        market prices, and are often forced to choose between investing 
                        in their crops and fulfilling basic needs for their families. Your 
                        support keeps their crops growing and their livelihoods stable.
                    </p>
                </div>
                <div>
                {loans.map(loan => {
                    if (loan.type_category == "Agriculture") return (
                        <div>
                            <img src={loan.thumbnailUrl} />
                            <div>
                                <h1>{loan.loan_name}</h1>
                                <p>{loan.location}</p>
                                <p>{loan.loan_description}</p>
                                <p>{loan.total_amount}</p>
                                <button>$25</button>
                                <button>Lend Now</button>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    };
}

export default AgricultureLoanIndex;