import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from "./reducer"
const initialState = {
  username: '',
  email: '',
  password: '',
  pets: []
}


const store = createStore(reducer, initialState, composeWithDevTools())



export default store
