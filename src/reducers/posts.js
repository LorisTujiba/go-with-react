import { FETCH_POSTS, LAZY_FETCH_POSTS} from '../actions/index';
import _ from "lodash";

export default function(state = {}, action){
  switch(action.type){
    case LAZY_FETCH_POSTS :
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_POSTS :
      return _.mapKeys(action.payload.data, 'id')
    default :
      return state
  }
}
