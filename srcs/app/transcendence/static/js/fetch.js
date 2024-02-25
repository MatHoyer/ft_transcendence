export const SERVER_URL = 'https://localhost:8000';

export const doRequest = {
	getCookie: function getCookie(name) {
		let cookieValue = null;
		if (document.cookie && document.cookie !== '') {
			let cookies = document.cookie.split(';');
			for (let i = 0; i < cookies.length; i++) {
				let cookie = cookies[i].trim();
				if (cookie.substring(0, name.length + 1) === (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	},

	Fetch: function(url, method, data, callback) {
		const csrftoken = this.getCookie('csrftoken');
		const options = {
			method: method,
			headers: {
				'X-CSRFToken': csrftoken,
			},
			credentials: 'include'
		};
		if (data instanceof FormData) {
			options.body = data;
		}
		else if (method !== 'GET' && method !== 'HEAD') {
			options.headers['Content-Type'] = 'application/json';
			options.body = JSON.stringify(data);
		}
		fetch(url, options)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.json());
			}
			return response.json();
		})
		.then(data => {
			callback(data);
			// setTimeout(function() {
			// 	document.getElementById('message').textContent = '';
			// }, 5000);
		})
		.catch(error => {
			console.error(error);
		});
	},

	// -------------   CALLBACKS  -------------


	callbackLogin: function(data) {
		// let messageElement = document.getElementById('message');
		if (data.status === 'ok') {
			console.log('CONNEXION REUSSIE');
			window.location.hash = 'games';
			// messageElement.textContent = "Connexion réussie !";
			// messageElement.style.color = 'green';
		}
		else if (data.status === 'error') {
			console.log('ERREUR DE CONNEXION');
			window.location.hash = 'login';
			// messageElement.textContent = data.message;
			// messageElement.style.color = 'red';
		}
	},

	callbackLogout: function(data) {
		// let messageElement = document.getElementById('message');
		if (data.status === 'ok') {
			console.log('DECONNEXION REUSSIE');
			window.location.hash = 'login';
			// messageElement.textContent = data.message;
			// messageElement.style.color = 'green';
		}
		else if (data.status === 'error') {
			console.log('ERREUR DE DECONNEXION');
			// messageElement.textContent = data.message;
			// messageElement.style.color = 'red';
		}
	},

	callbackRegister: function(data) {
		// let messageElement = document.getElementById('message');
		if (data.status === 'ok') {
			console.log('INSCRIPTION REUSSIE');
			// messageElement.textContent = data.message;
			// messageElement.style.color = 'green';
		}
		else if (data.status === 'error') {
			console.log('ERREUR D\'INSCRIPTION');
			// messageElement.textContent = data.message;
			// messageElement.style.color = 'red';
		}
	},

	callbackProfile: function(data) {
		// let messageElement = document.getElementById('message');
		if (data.status === 'ok') {
			console.log('MODIFICATION REUSSIE');
			// messageElement.textContent = data.message;
			// messageElement.style.color = 'green';
			window.location.hash = 'profile';
		}
		else if (data.status === 'error') {
			console.log('ERREUR DE MODIFICATION');
			// messageElement.textContent = data.message;
			// messageElement.style.color = 'red';
		}
	},

	callbackGames: function(data) {
		// let messageElement = document.getElementById('message');
		if (data.status === 'ok') {
			console.log('GAMES REUSSIE');
			// messageElement.textContent = data.message;
			// messageElement.style.color = 'green';
		}
		else if (data.status === 'error') {
			console.log('ERREUR DE GAMES');
			// messageElement.textContent = data.message;
			// messageElement.style.color = 'red';
		}
	},
};
