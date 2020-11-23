import React from 'react';

class LoanShow extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchLoan(this.props.match.params.id)
    };

    render() {
        const { loan } = this.props;
        return (
            <div>
                <h1>Show page</h1>
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
    };
}

export default LoanShow;