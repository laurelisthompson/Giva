import React from 'react';
import { Link } from 'react-router-dom';

class RefugeeLoanIndex extends React.Component {
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
                    <p><Link to={'/loans'}>All Loans</Link> - Refugees and IDPs</p>
                    <h1>Refugees and IDPs</h1>
                    <p>
                        More than 79 million people have been forced to leave their homes in 
                        the wake of human or natural disasters, and most can’t return for many 
                        years, if ever. Refugees, internally displaced people and host communities 
                        need our support.
                    </p>
                </div>
                <div>
                    {loans.map(loan => {
                        if (loan.type_category == "Refugees") return (
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

export default RefugeeLoanIndex;