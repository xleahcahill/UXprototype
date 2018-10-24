import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {
 
  constructor(public navCtrl: NavController, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, public alertCtrl: AlertController) { 

  
 }
 

    onLink(url: string) {
        window.open(url);
    }

    doPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Comment',
        message: "Leave a comment",
        inputs: [
          {
          //name: '',
            placeholder: '....'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Post',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }


   
        
}
