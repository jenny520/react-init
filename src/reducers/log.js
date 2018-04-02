/**
 * Created by zhoumeiyan on 2018/4/2.
 */
import * as types from '../actions/actionTypes'
const initState = {
    toastText: null
}

const logReducers = (state = initState, action) => {
    switch (action.type) {
        case action.SHOW_TOAST:
            return {
                toastText: action.payload.toastText
            }
        case action.HIDE_TOAST:
            return {
                toastText: action.payload.toastText
            }
        default:
            return state
    }
}

export default logReducers