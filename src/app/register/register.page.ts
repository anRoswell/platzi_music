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
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
	registerForm: FormGroup;
	validationMessage = {
		name: [
			{ type: 'required', message: 'Nombre es requerido' },
			{ type: 'minlength', message: 'Minimo 5 letras para el nombre' }
		],
		apellido: [
			{ type: 'required', message: 'Apellido es requerido' },
			{ type: 'minlength', message: 'Minimo 5 letras para el apellido' }
		],
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
		this.registerForm = this.formBuilder.group({
			name: new FormControl(
				'',
				Validators.compose([Validators.required, , Validators.minLength(5)])
			),
			apellido: new FormControl(
				'',
				Validators.compose([Validators.required, Validators.minLength(5)])
			),
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

	register(userData) {
		userData.password = btoa(userData.password);
		this.authenticateService.registerUser(userData);
		this.route.navigateByUrl('/login');
	}

	goToLoguin() {}
}
