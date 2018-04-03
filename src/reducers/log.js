/**
 * Created by zhoumeiyan on 2018/4/2.
 */
import * as types from '../actions/actionTypes'
const initState = {
    toastText: null
}

const logReducers = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_TOAST:
            return {
                toastText: action.payload.toastText
            }
        case types.HIDE_TOAST:
            return {
                toastText: action.payload.toastText
            }
        default:
            return state
    }
}

export default logReducers