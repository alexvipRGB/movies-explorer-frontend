import { movieApiBeatfilm } from './constants';

class MoviesApi {
  constructor(config) {
    this._baseURL = config.baseURL;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка в запросе: ${res.status}`)
  }

  getMovies() {
    return fetch(this._baseURL, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => this._checkResponse(res));
  }
}

export const moviesApi = new MoviesApi(movieApiBeatfilm);