import 'whatwg-fetch'
import { message, Modal } from 'antd'

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  return response;
}

export default function request(url, options) {
  let merged = Object.assign({}, {
    headers: {
      Accept: 'application/json'
    },
    credentials: 'include'
  }, options)

  return fetch(url, merged)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      return data
    })
}

