/**
 * Created by zhoumeiyan on 2018/4/2.
 */
import {combineReducers} from 'redux'
import http from './http'
import log from './log'
import spider from './spider'

const reducers = {
    http,
    log,
    spider
}

export default function createReducer() {
    return combineReducers(reducers)
}