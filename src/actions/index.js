import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchUsers(){
  const req = axios.get("http://localhost:8080/users")

  return{
    type : FETCH_USERS,
    payload: req
  }
}

export function fetchPosts(){
  const req = axios.get("http://localhost:8080/posts")

  return{
    type : FETCH_POSTS,
    payload : req
  }
}
