import { apiMain } from './constants';

class MainApi {
    constructor(config) {
        this._baseURL = config.baseURL;
        this._headers = config.headers
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка в запросе: ${res.status}`)
    }

    registerUser(userData) {
        return fetch(`${this._baseURL}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(userData),

        })
        .then(res => this._checkResponse(res))
    }

    loginUser(userData) {
        return fetch(`${this._baseURL}/signin`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(userData),
        })
        .then(res => this._checkResponse(res))
    }

    getUserInfo() {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
        .then(res => this._checkResponse(res));
    }

    setUserInfo(userData) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(userData)
        })
        .then(res => this._checkResponse(res));
    }

    logoutUser() {
        return fetch(`${this._baseURL}/signout`, {
          method: 'POST',
          credentials: 'include',
        })
        .then(res => this._checkResponse(res));
    }

    addMovie(movieData) {
        return fetch(`${this._baseURL}/movies`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(movieData),
        })
        .then(res => this._checkResponse(res));
    }

    getSavedMovies() {
        return fetch(`${this._baseURL}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
        .then(res => this._checkResponse(res));
    }

    deleteMovie(movieId) {
        return fetch(`${this._baseURL}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
        .then(res => this._checkResponse(res));
    }
}

export const mainApi = new MainApi(apiMain);