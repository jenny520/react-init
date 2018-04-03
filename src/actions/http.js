/**
 * Created by zhoumeiyan on 2018/4/2.
 */
import * as types from './actionTypes'

export const setLoginInfo = loginInfo => (dispatch, getState) => {
    return dispatch({
        type: types.LOGIN_INFO,
        payload: {
            loginInfo
        }
    })
}
