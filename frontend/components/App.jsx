import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import ProfileContainer from "./profile/profile_container";
import ProfileContainer from "./profile/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import LoanIndexContainer from './loan/loan_index_container';
import WomenIndexContainer from './categories/women_loan_container';
import AgricultureIndexContainer from './categories/agriculture_loan_container';
import EducationIndexContainer from './categories/education_loan_container';
import RefugeeIndexContainer from './categories/refugee_loan_container';
import EcoIndexContainer from './categories/eco_loan_container';
import DomesticIndexContainer from './categories/domestic_loan_container';
import LivestockIndexContainer from './categories/livestock_loan_container';
import ArtsIndexContainer from './categories/arts_loan_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            
        </header>
        <Switch>
            <Route exact path="/profile" component={ProfileContainer} />
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute exact path="/signin" component={LogInFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
            <Route exact path="/loans" component={LoanIndexContainer} />
            <Route exact path="/loans/women" component={WomenIndexContainer} />
            <Route exact path="/loans/agriculture" component={AgricultureIndexContainer} />
            <Route exact path="/loans/education" component={EducationIndexContainer} />
            <Route exact path="/loans/refugee" component={RefugeeIndexContainer} />
            <Route exact path="/loans/eco" component={EcoIndexContainer} />
            <Route exact path="/loans/domestic" component={DomesticIndexContainer} />
            <Route exact path="/loans/livestock" component={LivestockIndexContainer} />
            <Route exact path="/loans/arts" component={ArtsIndexContainer} />
        </Switch>
    </div>
);

export default App;