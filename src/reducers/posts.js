import { FETCH_POSTS, LAZY_FETCH_POSTS} from '../actions/index';
import _ from "lodash";

export default function(state = {}, action){
  switch(action.type){
    case LAZY_FETCH_POSTS :
      const newState = _.mapKeys(action.payload.data.Posts, 'id');
      const combined = _.merge(state.posts,newState)
      return {
        'posts' : combined,
        'next_data': action.payload.data.Next_data
      }
    case FETCH_POSTS :
      return _.mapKeys(action.payload.data, 'id')
    default :
      return state
  }
}
