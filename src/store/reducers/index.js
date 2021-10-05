import { combineReducers } from 'redux';
import ImageReducer from '_store/reducers/imageReducer'
import QuestionsReducer from '_store/reducers/questionsReducer'


const reducers = combineReducers({
  image: ImageReducer,
  questions:QuestionsReducer
});

export default reducers;