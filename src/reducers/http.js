/**
 * Created by zhoumeiyan on 2018/4/2.
 */
import * as types from '../actions/actionTypes'

const initState = {
    loginInfo: {}
}

const httpReduers = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_INFO:
            return {
                loginInfo: action.payload.loginInfo
            }
        default:
            return state
    }
}

export default httpReduers