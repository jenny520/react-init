/**
 * Created by zhoumeiyan on 19/07/2017.
 */
import 'whatwg-fetch'
import 'es6-promise'
import * as queryString from 'query-string'
import * as _ from 'lodash'
import {header} from './config'

export function get(url, params) {
    if (params) {
        url += '?' + queryString.stringify(params)
    }
    return fetch(url,{mode: 'no-cors'})
        .then((response) => response.json())
        .catch((err) => {
            console.log(err)
        })
}

export function post(url, params) {
    const options = _.extend(header, {
        body: JSON.stringify(params)
    });
    return fetch(url, options)
        .then((response) => response.json())
        .catch((err) => {
            console.log(err)
        })
}