# Description
Giva is a single page web app clone of the loan website [kiva](https://www.kiva.org/) that allows users to contribute to crowdfunded loans. 
Check out the live site [here](https://giva-a.herokuapp.com/#/)!
![](/app/assets/images/giva-description.gif)

# Technologies
Frontend:
* React
* Redux
* SCSS
Backend:
* Ruby on Rails
* PostgreSQL
Hosting:
* AWS S3
* Heroku

# Features
* User Authentication that includes error handling and a "Demo User" login
* Media management and hosting with Rails Active Storage and AWS S3
* Integration of CRUD functionality with Redux state management allowing for seamless loan contributions
* Comparison of the loans contributed to on the user's profile page
![](/app/assets/images/giva-userauth.gif)

# Project Highlights
One challenge of this project was allowing the users to contribute to the available loans, and then referencing those contributions on their user profile. I created a lending table that joined the user to the loan and actions that would create lending transactions and then fetch all lending transactions.

```
const receiveAllLendingTransactions = (lendingTransactions) => {
  return {
    type: RECEIVE_ALL_LENDING_TRANSACTIONS,
    lendingTransactions
  }
}

const receiveLendingTransaction = (lendingTransaction) => {
  return {
    type: RECEIVE_LENDING_TRANSACTION,
    lendingTransaction
  }
}

export const fetchAllLendingTransactions = () => (dispatch) => {
  return APIUtil.fetchAllLendingTransactions()
    .then((payload) => dispatch(receiveAllLendingTransactions(payload)));
}

export const fetchLendingTransaction = (lendingTransactionId) => (dispatch) => {
  return APIUtil.fetchLendingTransaction(lendingTransactionId)
    .then((lendingTransactionId) => dispatch(receiveLendingTransaction(lendingTransactionId)));
}

export const createLendingTransaction = (lendingTransaction) => (dispatch) => {
  return APIUtil.createLendingTransaction(lendingTransaction)
    .then((lendingTransaction) => dispatch(receiveLendingTransaction(lendingTransaction)));
}
```

Then, when the user is on one of the loan pages, I wrote a handleAddLoan function that is run when the "Lend" buton is clicked. This creates a lending transaction, storing both the user's ID, and the loan's ID.

```
handleAddLoan(loanId) {
  return e => {
    e.preventDefault();
    let newLendingTransaction = {userId: this.props.session.id, loanId: loanId }
    this.props.createLendingTransaction(newLendingTransaction)
  }
}
```

For the user to view the loans they've contributed to, I needed to look through the lending transactions in the state that matched the user's ID and then only pull the loans with corresponding loan ID's in the transaction history. 

```
componentDidMount() {
  this.props.fetchAllLendingTransactions();
  this.props.fetchAllLoans();
}

componentDidUpdate(prevProps, prevState) {
  if (prevProps.lenders.length !== this.props.lenders.length) {
    this.setState({loading: false})
  } else {
    if (!this.props.lenders.length && this.state.loading) {
      this.setState({loanMessage: "You do not have any loans. Go loan to some of your favorite characters and help them accomplish their missions!", loading: false})
    }
  }
}

buildLenderData(loan) {
  return (
    <div>
      <div>
        <img src={loan.thumbnailUrl} />
      </div>
      
      <h1>{loan.loan_name}</h1>
      <p>{loan.location}</p>
      <p>{loan.loan_description}</p>
    </div>
  )
}
```

I was then able to render the loans for the user, or let them know they have not contributed to any loans yet.

```
<div>
  {
    !this.props.lenders.length ? <p className="profile-message">{this.state.loanMessage}</p> : 
    loans.map(this.buildLenderData)
  }
</div>
```