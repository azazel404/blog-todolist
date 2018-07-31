import axios from 'axios'; //export axios
import { FETCH_USER, FETCH_BLOGS, FETCH_BLOG } from './types'; // export constant dari type untuk dispatch

//get all data user  // dispatch data user
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

//post create payment stripe / dispatch data payment stripe
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

//create submit data blog / post dispatch data blog
export const submitBlog = (values, history) => async dispatch => {
  const res = await axios.post('/api/blogs', values);

  history.push('/blogs');
  dispatch({ type: FETCH_BLOG, payload: res.data });
};

//get all data blogs / get all dispatch data blog
export const fetchBlogs = () => async dispatch => {
  const res = await axios.get('/api/blogs');

  dispatch({ type: FETCH_BLOGS, payload: res.data });
};

//mengambil data spesifik blog / get data spesifik dispatch data blog
export const fetchBlog = id => async dispatch => {
  const res = await axios.get(`/api/blogs/${id}`);

  dispatch({ type: FETCH_BLOG, payload: res.data });
};
