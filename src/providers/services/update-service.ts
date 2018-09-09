import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastController } from '@ionic/angular';

@Injectable()
export class UpdateService {

  constructor(updates: SwUpdate, public toastCtrl: ToastController) {
    updates.available.subscribe(event => {
      this.presentToastWithOptions('New version available, restart to update.');
    });
  }

  async presentToastWithOptions(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'ok'
    });
    toast.present();

    toast.onDidDismiss().then(() => {
        window.location.reload();
    });
  }
}