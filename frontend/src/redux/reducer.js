import React from 'react'

const initialState = {
   pets: [],
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

    default:
      return state
  }
}

export default reducer
