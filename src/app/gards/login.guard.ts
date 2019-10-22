import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	CanActivate,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoginGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate() {
		const isIntroShowed = localStorage.getItem('isUserLogguedIn');
		if (isIntroShowed) {
			return true;
		} else {
			this.router.navigateByUrl('/login');
		}
	}
}
