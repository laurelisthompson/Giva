import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>Giva</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/signin" component={LogInFormContainer}/>
            <Route exact path="/signup" component={SignUpFormContainer}/>
        </Switch>
    </div>
);

export default App;