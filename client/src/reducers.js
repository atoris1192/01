import { combineReducers } from 'redux'
import { CHANGE_NAME, CHANGE_AGE, INITIAL_FORM } from './actions'

const initialState = {
  form: {
    name: '',
    age: '',
  },
  characters: {
    isFetching: false,
    characterArray: [],
  }
}

const formReducer = (state = initialState.form, action)=> {
  switch(action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      }
    case CHANGE_AGE:
      return {
        ...state,
        age: action.age,
      }
    case INITIAL_FORM:
      return initialState.form

    default:
      return state
  }
}
const listReducer = (state = initialState.characters, action)=> {
  switch(action.type) {

    default:
      return state
  }

}

const rootReducer = combineReducers({
  form: formReducer,
  characters: listReducer,
})

export default rootReducer
