import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl
} from '@angular/forms';

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

	constructor(private formBuilder: FormBuilder) {
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

	loginUser() {}
}
