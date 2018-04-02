/**
 * Created by zhoumeiyan on 2018/4/2.
 */
import * as types from 'actionTypes'

export const toast = (toastText) => {
    return (dispatch, getState) => {
        dispatch({
            type: types.SHOW_TOAST,
            payload: {
                toastText
            }
        })
        setTimeout(() => {
            dispatch({
                type: types.HIDE_TOAST,
                payload: {
                    toastText: null
                }
            })
        }, 1200)
    }
}