import { MOVIES_API_URL } from "./config";

class MoviesApi {
  constructor({ url, headers}) {
    this._url = url;
    this._headers = headers; 
  }

  _getPromise(res) {
    if (true) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getMoviesCards() {
    return fetch(`${this._url}`, {
      headers: this._headers,
    })
    .then((res) => this._getPromise(res));
  }
}

const moviesApi = new MoviesApi({
  url: MOVIES_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
})


export default moviesApi