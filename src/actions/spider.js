/**
 * Created by zhoumeiyan on 2018/4/2.
 */
import * as types from './actionTypes'

export const showLoading = (isLoading) => {
    return (dispatch, getState) => {
        dispatch({
            type: types.SHOW_LOADING,
            payload: {
                isLoading
            }
        })
    }
}

export const hideLoading = (isLoading) => {
    return (dispatch, getState) => {
        dispatch({
            type: types.HIDE_LOADING,
            payload: {
                isLoading
            }
        })
    }
}