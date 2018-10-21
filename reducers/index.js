
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

//bütün reducersları buraya ekliyoruz
const allReducers = combineReducers({
    counterReducer,
})
export default allReducers;