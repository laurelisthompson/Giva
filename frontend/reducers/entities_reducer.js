import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import loansReducer from './loans_reducer';
import lendersReducer from './lenders_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    loans: loansReducer,
    lenders: lendersReducer,
});

export default entitiesReducer;