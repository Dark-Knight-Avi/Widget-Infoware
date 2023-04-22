import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {actionCreators} from '.'
import reducers from './reducers'

export const store = createStore(reducers, {}, applyMiddleware(thunk))