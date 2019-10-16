import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage {
	slideOps = {
		initialSlide: 0,
		slidesPerView: 1,
		centeredSlides: true,
		speed: 400
	};

	constructor(private toastController: ToastController) {}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.presentToast();
	}

	async presentToast() {
		const toast = await this.toastController.create({
			message: 'Your settings have been saved.',
			cssClass: 'toast',
			position: 'middle',
			color: 'warning'
		});
		await toast.present();
	}
}
