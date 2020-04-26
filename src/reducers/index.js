import { combineReducers } from 'redux'
import {reducer as shopUserReducer} from './shopUserReducer'
import {shopsListReducer} from './shopsListReducer'

export default combineReducers({
  shopUserReducer,
  shopsListReducer
})