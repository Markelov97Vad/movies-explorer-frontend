import { MAIN_API_URL } from "./config";

class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json()
    } else {
      return Promise.reject(`${res.status} - ${res.statusText}`)
    }
  }

  register({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
    .then( res => this._checkResponse(res))
  }

  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password })
    })
    .then(res => this._checkResponse(res));
  }

  checkToken() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => this._checkResponse(res));
  }
}

const mainApi = new MainApi({
  url: MAIN_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default mainApi;