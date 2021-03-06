import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './../services/authenticate.service';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
	loginForm: FormGroup;
	validationMessage = {
		email: [
			{ type: 'required', message: 'El email es requerido' },
			{ type: 'pattern', message: 'ojo, email no valido' }
		],
		password: [
			{ type: 'required', message: 'Password es requerido' },
			{ type: 'minlength', message: 'Minimo 5 letras para el password' }
		]
	};
	errorMessage = '';

	constructor(
		private formBuilder: FormBuilder,
		private authenticateService: AuthenticateService,
		private route: Router
	) {
		this.loginForm = this.formBuilder.group({
			email: new FormControl(
				'',
				Validators.compose([
					Validators.required,
					Validators.pattern('^[^@]+@[^@]+.[a-zA-Z]{2,}$')
				])
			),
			password: new FormControl(
				'',
				Validators.compose([Validators.required, Validators.minLength(5)])
			)
		});
	}

	ngOnInit() {}

	LoginUser(credentials: { email: string; password: string }) {
		this.authenticateService
			.loginUser(credentials)
			.then(res => {
				console.log(res);
				this.errorMessage = '';
				localStorage.setItem('isUserLogguedIn', 'true');
				this.route.navigateByUrl('/menu/home');
			})
			.catch(err => {
				this.errorMessage = err;
			});
	}

	goToRegister() {
		this.route.navigateByUrl('/register');
	}
}
