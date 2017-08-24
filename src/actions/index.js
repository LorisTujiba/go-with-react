import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const LAZY_FETCH_POSTS = 'LAZY_FETCH_POSTS';

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

export function lazyFetchPosts(offset){
  const req = axios.get("http://localhost:8080/posts/"+offset)
  return{
    type : LAZY_FETCH_POSTS,
    payload : req
  }
}
