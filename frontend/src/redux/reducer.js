import React from 'react'

const initialState = {
  username: '',
  email: '',
  password: '',
  pets: [],
  user: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
   
    case 'INIT_PETS':
      return {
        ...state,
        pets: action.payload,
      }
    case 'FILTER_BY_TYPE':
      return {
        ...state,
        pets: state.pets.filter((el) => el.type === action.payload),
      }
      case 'INIT_USER':
        return {
          ...state,
          user: action.payload,
        }
        case 'SIGN_UP':
        return {
          ...state,
          user: action.payload,
        }
    default:
      return state
  }
}

export default reducer
