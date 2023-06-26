import { MOVIES_API_URL } from "./constants";

// запросы к BeatfilmMoviesApi
class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers; 
  }

  _getPromise(res) {
    if (res.ok) {
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