import mapKeys from 'lodash/mapKeys'; // map keys from lodash
import { FETCH_BLOGS, FETCH_BLOG } from '../actions/types'; // action center

//store reducer
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BLOG:
    
      const blog = action.payload;
      return { ...state, [blog._id]: blog };
    case FETCH_BLOGS:
      return { ...state, ...mapKeys(action.payload, '_id') };
    default:
      return state; 
  }
}
