import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import loansReducer from './loans_reducer';
import lendingReducer from './lenders_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    loans: loansReducer,
    lenders: lendingReducer,
});

export default entitiesReducer;