import React from 'react';
import { Link } from 'react-router-dom';

class EcoLoanIndex extends React.Component {
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
                    <p><Link to={'/loans'}>All Loans</Link> - Eco-friendly</p>
                    <h1>Eco-friendly</h1>
                    <p>
                        Protecting the environment and creating economic growth don’t always 
                        go hand in hand, but by supporting these loans you give people access 
                        to products that reduce pollution and provide sustainable energy, and 
                        support businesses that promote recycling.
                    </p>
                </div>
                <div>
                    {loans.map(loan => {
                        if (loan.type_category == "Eco-friendly") return (
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

export default EcoLoanIndex;