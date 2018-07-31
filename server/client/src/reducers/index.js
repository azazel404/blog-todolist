import { combineReducers } from 'redux'; //combine all reducer from redux
import { reducer as reduxForm } from 'redux-form'; // redux form from redux dari reducer
import authReducer from './authReducer'; //auth reducer 
import blogsReducer from './blogsReducer'; // blog reducer

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  blogs: blogsReducer
});
