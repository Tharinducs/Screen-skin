import { combineReducers } from 'redux';
import ImageReducer from '_store/reducers/image'


const reducers = combineReducers({
  image: ImageReducer
});

export default reducers;