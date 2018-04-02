/**
 * Created by zhoumeiyan on 2018/4/2.
 */
import * as types from '../actions/actionTypes'
const initState = {
    isLoading: false
}

const spiderReducers = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_LOADING:
            return {
                isLoading: action.payload.isLoading
            }
        case types.HIDE_LOADING:
            return {
                isLoading: action.payload.isLoading
            }
        default:
            return state
    }
}

export default spiderReducers