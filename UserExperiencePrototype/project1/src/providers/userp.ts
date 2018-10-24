import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the recipes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class usersp {
  data1: any;


  constructor(public http: Http,
    public alerCtrl: AlertController) {
      
    }
   
    load() {
      if (this.data1) {
        // already loaded data
        return Promise.resolve(this.data1);
      }

      // don't have the data yet
      return new Promise(resolve => {
        // We're using Angular HTTP provider to request the data,
        // then on the response, it'll map the JSON data to a parsed JS object.
        // Next, we process the data and resolve the promise with the new data.
        this.http.get('https://randomuser.me/api/?results=15')
          .map(res => res.json())
          .subscribe(data1 => {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            this.data1 = data1.results;
            resolve(this.data1);
          });
      });

    }
    presentConfirm() {
      let alert = this.alerCtrl.create({
        title: '',
        message: 'Do you want to follow this user?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              console.log('Follow clicked');
            }
          }
        ]
      });
      alert.present();
    }

 
}

