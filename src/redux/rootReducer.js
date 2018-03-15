import Immutable from 'seamless-immutable'
import { combineReducers, routerReducer } from 'redux-seamless-immutable'
import { reducer as formReducer } from 'redux-form'
import numerals from './modules/numerals/reducer'

export default combineReducers(Immutable({
  routing: routerReducer,
  form: formReducer,
  numerals
}))
