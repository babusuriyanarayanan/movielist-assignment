import promise from 'es6-promise'
import fetch from 'isomorphic-fetch'
promise.polyfill();

const baseUrl = 'http://localhost:3000/data'

export const loadDatas = () => {

    return fetch(baseUrl).then(res => res.json())
}
