import { createStore, combineReducers, applyMiddleware } from 'redux';
import {goodsReducer} from "./goodsReducer";
import { busketReducer } from './busketReducer';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
    goodsReducer,
    busketReducer
})

export const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)))
