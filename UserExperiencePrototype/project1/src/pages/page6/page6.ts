import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6 {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  slides = [
    {
      title: "Ingredients.",
      title2: "Frying pan pizza with aubergine, ricotta & mint",
      description: "- Dough : 200g strong white bread flour.",
      description2: "</br> - ½ tsp fast- action dried yeast.",
      description3: "</br> - ¼ tsp golden caster sugar.",
      description4: "</br> - Oil. </br > ",
      image: "../../../www/images/pizzatopping.jpg"
    },
    {
      title: "Step One:",
      description: "- Add 1/2 tsp salt and 125ml warm water to a bowl.",
      description2: "</br>- Mix to form a soft dough, knead for 5 mins",
      description3: "</br>- Clean and grease the bowl and return the dough",
      description4: "</br>- Cover with cling film and leave somewhere warm to rise for 1 hr",
      image: "../../../www/images/stepone2.jpg"
    },
    {
      title: "Step Two:",
      description: "- Meanwhile, make the sauce. Heat 1 tbsp olive oil in a pan and add the garlic.",
      description2: "- Sizzle gently for 30 secs, making sure the garlic doesn’t brown, then add the passata.",
      description3: "- Season well and bubble for 8- 10 mins until you have a rich sauce. Set aside.",
      image: "../../../www/images/steptwo2.jpg"
    },
    {
      title: "Step Three:",
      description: "- When the dough has risen, knock out the air and roll it into a pizza base the same size as a large frying pan.",
      description2: "- Oil the surface of the dough, cover with cling film , then leave on the work surface for 15 mins to puff up a little.",
      description3: "- Meanwhile, heat 2 tbsp oil in the frying pan and add the aubergines in a single layer.",
      image: "../../../www/images/stepthree2.jpg"
    },
    {
      title: "Step Four:",
      description: "- Heat the remaining 1 tbsp of oil in the pan and carefully lift the dough into it." ,
      description2: "- You may have to reshape it a little to fit.",
      description3: "- Cook over a low- medium heat until the underside is golden brown and the edges of the dough are starting to look dry and set",
      image: "../../../www/images/bbcgoodfood.jpg"
    }
  ];
}
