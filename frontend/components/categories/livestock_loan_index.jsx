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
                    <p><Link to={'/loans'}>All Loans</Link> > Livestock</p>
                    <h1>Livestock</h1>
                    <p>
                        Cows, pigs and other animals have the potential to dramatically increase 
                        farming incomes, but the initial cost can be a barrier. Help farmers invest 
                        in their futures.
                    </p>
                </div>
                <div>
                    {loans.map(loan => {
                        if (loan.type_category == "Livestock") return (
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

export default LivestockLoanIndex;