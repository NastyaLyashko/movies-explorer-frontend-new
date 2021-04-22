export const BASE_URL = 'https://api.lyashko-movies-explorer.students.nomoredomains.icu';

const chekResponse = (response) => response.ok ? response.json() : Promise.reject('Ошибка');

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(chekResponse)
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then(chekResponse)
    .catch((err) => {
        console.log(err)
    })
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        'authorization': `Bearer ${token}`,
        },
    })
    .then(chekResponse)
    .catch((err) => {
        console.log(err)
    })
};

class Api {
    constructor({baseUrl, headers},) {
        this.headers = headers;
        this.baseUrl = baseUrl;
    }

    setToken(jwt) {
        this.headers.authorization = `Bearer ${jwt}`;
    }

    getSavedMovies() {
        return fetch(`${this.baseUrl}/movies`, {
            headers: this.headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    } 
    
    getUserData() {
        return fetch (`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }

    patchUserData(item) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: item.name,
                email: item.email
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .then((res) => {
            return res;
        })
    }

    postMovie (card) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({country: card.country  || 'DEFAULT', 
                director: card.director || 'DEFAULT',
                duration: card.duration || 'DEFAULT', 
                year: card.year || 'DEFAULT', 
                description: card.description || 'DEFAULT',
                image: `https://api.nomoreparties.co${card.image.url}` || 'https://tgtdiagnostics.com/wp-content/themes/tgt/assets/svg/no.svg',
                trailer: card.trailerLink || 'https://www.youtube.com/', 
                movieId: card.id, 
                nameRU: card.nameRU || 'DEFAULT', 
                nameEN: card.nameEN || 'DEFAULT', 
                thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}` || 'https://tgtdiagnostics.com/wp-content/themes/tgt/assets/svg/no.svg',
            })
        })   
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
            return res;
        })
    }

    deleteMovie (_id) {
        return fetch(`${this.baseUrl}/movies/${_id}`, {
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify({
                _id: _id,
            })
        })   
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}

export const api = new Api({
    baseUrl: BASE_URL,
    headers: {
        'authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
    }
})