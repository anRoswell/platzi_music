import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
	constructor(private menu: MenuController, private router: Router) {}

	ngOnInit() {}

	closeMenu() {
		this.menu.close();
	}

	salir() {
		localStorage.removeItem('isUserLogguedIn');
		this.router.navigateByUrl('/login');
	}
}
