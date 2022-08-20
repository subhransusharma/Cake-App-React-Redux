import { combineReducers } from 'redux';

import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icecream/icecreamReducer';
import userReducer from './user/userReducer';

const rootReducers = combineReducers({
    cakes: cakeReducer,
    iceCreams: iceCreamReducer,
    users: userReducer
})

export default rootReducers;