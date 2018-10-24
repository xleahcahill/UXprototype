import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Page7 } from '../page7/page7';


@Component({
  selector: 'page-page3',
 templateUrl: 'page3.html'
 
})
export class Page3 {
  pushPage: any;

  constructor(private navController: NavController, public alerCtrl: AlertController) {
    this.pushPage = Page7;
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Thank you',
      message: 'Recipe Posted!',
      buttons: ['Ok']
    });
    alert.present()

  }
}
