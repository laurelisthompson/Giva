import React from 'react';
import { Link } from 'react-router-dom';

class WomenLoanIndex extends React.Component {
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
                            <Link class="header-button" to="/dashboard">Giva</Link>
                        </div>
                        <div>
                            <button class="lend-button">Lend</button>
                        </div>
                    </div>
                    <div>
                        <button>About</button>
                        <Link to="/profile">Profile</Link>
                    </div>
                </nav>
                <div>
                    <p><Link to={'/loans'}>All Loans</Link> - Women</p>
                    <h1>Women</h1>
                    <p>
                        Worldwide, women have much less economic opportunity, security, and freedom. 
                        Support women starting their own businesses, going to school, and investing 
                        in the health of their communities and families.
                    </p>
                </div>
                <div>
                    {loans.map(loan => {
                        if (loan.type_category == "Women") return (
                            <div>
                                <div class="loan-photo"><img src={loan.thumbnailUrl} /></div>
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

export default WomenLoanIndex;