import authReducer from './authReducer'
import gardenReducer from './gardenReducer'
import inventoryReducer from './inventoryReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    garden: gardenReducer,
    inventory: inventoryReducer
});

export default rootReducer

