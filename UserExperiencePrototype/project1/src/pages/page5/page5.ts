import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5 {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  myimgs = [{
    "myimg": ".../../../www/images/bbcgoodfood7.jpg",
    "title": "xleahcatherine",
    "caption": "Pancakes today with strawberries & cream."
  },
    {
      "myimg": ".../../../www/images/bbcgoodfood2.jpg",
      "title": "Beclpowel",
      "caption": "Testing out some recipes."
    },
    {
    "myimg": ".../../../www/images/bbcgoodfood5.jpg",
    "title": "Jadelcahill",
    "caption": "Baked this cheesecake today."
    },
    {
      "myimg": ".../../../www/images/bbcgoodfood6.jpg",
      "title": "AndreaCa1966",
      "caption": "Chinese style noodles"
    }
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {



  }
}
