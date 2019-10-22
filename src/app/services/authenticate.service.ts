import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthenticateService {
	constructor() {}

	loginUser(credentials: { email: string; password: string }) {
		return new Promise((accept, reject) => {
			const user = JSON.parse(localStorage.getItem('user'));
			console.log(user);
			console.log(credentials.email);
			console.log(btoa(credentials.password));
			if (
				credentials.email === user.email &&
				btoa(credentials.password) === user.password
			) {
				accept('Login correcto');
			} else {
				reject('Login incorrecto');
			}
		});
	}

	registerUser(userData: any) {
		return localStorage.setItem('user', JSON.stringify(userData));
	}

	getDataLocalStorage() {}
}
