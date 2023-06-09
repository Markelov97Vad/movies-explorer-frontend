import { MAIN_API_URL } from "./constants";

class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json()
    } else {
      return Promise.reject(res.status)
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

  logout() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers
    })
    .then(res => this._checkResponse(res));
  }

  setUserInfo({name, email}) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name , email})
    })
    .then(res => this._checkResponse(res));
  }

  getMoviesSavedByUser() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => this._checkResponse(res));
  }

  addMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',  
      headers: this._headers,
      body: JSON.stringify({...movie})
    })
    .then(res => this._checkResponse(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
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