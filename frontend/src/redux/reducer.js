import React from 'react'

const initialState = {
  username: '',
  email: '',
  password: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      // console.log(action.payload);
      return {
        ...state,
        username: action.payload[0],
        email: action.payload[1],
        password: action.payload[2],
      }
    case 'SIGNUP':
      return {
        ...state,
        username: action.payload[0],
        email: action.payload[1],
        password: action.payload[2],
      }

    default:
      return state
  }
}

export default reducer
