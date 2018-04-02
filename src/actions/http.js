/**
 * Created by zhoumeiyan on 2018/4/2.
 */
import * as types from 'actionTypes'

export const setLoginInfo = (loginInfo) => {
    return (dispatch, getState) => {
        dispatch({
            type: types.LOGIN_INFO,
            payload: {
                loginInfo
            }
        })
    }
}