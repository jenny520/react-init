/**
 * Created by zhoumeiyan on 19/07/2017.
 */
let store = {
    storage: window.localStorage,
    session: {
        storage: window.sessionStorage
    }
}
export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '($|\\s)')
    return reg.test(el.className)
}

export function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function getData(el, name, val) {
    const prefix = 'data-'
    if (val) {
        el.setAttribute(prefix + name, val)
    }
    el.getAttribute(prefix + name)
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
    let transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    }
    for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== 'undefined') {
            return key
        }
    }
    return false
})()

export function prefixStyle(style) {
    if (vendor === false) {
        return
    }
    if (vendor === 'standard') {
        return style
    }
    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

export function setStorage(key, val) {
    if (val && (typeof val === 'object')) {
        return store.storage.setItem(key, JSON.stringify(val))
    }
    return store.storage.setItem(key, val)
}
export function getStorage(key) {
    let val = store.storage.getItem(key)
    if (val === 'undefined') {
        return ;
    }
    return JSON.parse(val)
}
export function removeStorage(key) {
    return store.storage.removeItem(key)
}

