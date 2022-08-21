import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_REQUEST, ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE } from "./userTypes";
import axios from 'axios'

export const fetchUserRequest = () => {
 return {
    type: FETCH_USER_REQUEST
 }
}

export const fetchUserSuccess = (users) => {
 return {
    type: FETCH_USER_SUCCESS,
    payload: users
 }
}

export const fetchUserFailure = (error) => {
 return {
    type: FETCH_USER_FAILURE,
    payload: error
 }
}

export const addUserRequest = ({name:user}) => {
   return {
      type: ADD_USER_REQUEST
   }
  }
  
  export const addUserSuccess = (user) => {
   return {
      type: ADD_USER_SUCCESS,
      payload: user
   }
  }
  
  export const addUserFailure = (error) => {
   return {
      type: ADD_USER_FAILURE,
      payload: error
   }
  }

export const fetchUsers = () => {
   return function(dispatch) {
      dispatch(fetchUserRequest())
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
         const users = response.data;
         dispatch(fetchUserSuccess(users))
      })
      .catch(error => {
         const errorMessage = error.message;
         dispatch(fetchUserFailure(errorMessage))
      })
   }
}

export const addUsers = (user) => {
   return function(dispatch) {
      dispatch(addUserRequest(user))
      axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(response => {
         const users = response.data;
         dispatch(addUserSuccess(user))
      })
      .catch(error => {
         const errorMessage = error.message;
         dispatch(addUserFailure(errorMessage))
      })
   }
}