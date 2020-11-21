import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import loansReducer from './loans_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    loans: loansReducer
});

export default entitiesReducer;