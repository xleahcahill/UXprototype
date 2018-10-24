import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page7',
  templateUrl: 'page7.html'
})
export class Page7 {
  


  constructor(public navCtrl: NavController, public navParams: NavParams) {



  }

  slides = [
    {
      title: "Ingredients",
      title2: "Red berry fruit compote",
      description: "- 440g canned pitted cherries in syrup. </br></br>",
      description2: "-100g mixed fresh or frozen forest fruits. </br></br >",
      description3: "-180ml cranberry juice. </br>",
      descrition4: "- ½ tbsp vanilla extract < /br > </br >",
      description5: "-½ tsp ground cinnamon",
      image: "../../../www/images/bbcgoodfood3.jpg"
    },
    {
      title: "Step One:",
      description: "- In a large saucepan over a medium heat, cook the fruits in their juices and syrup. <br/> ",
      description2: "- Add in 150ml of the cranberry juice, the vanilla extract, cinnamon, sugar and rosewater for about 20 mins.</p>",
      image: "../../../www/images/stepone.jpg"
    },
    {
      title: "Step Two:",
      description: "- In a separate bowl, mix the remaining cranberry juice with the cornflour until it becomes smooth and milky without any lumps. <br />",
      description2: "- Pour slowly into the hot fruit and continue stirring until mixed in well. <br /> ",
      description3: "- Remove from the heat and leave to cool. <br />",
      description4: "- Transfer to a bowl, cover and chill in the fridge before serving for best results.",
      image: "../../../www/images/steptwo.jpg"
    },
    {
      title: "Step Three:",
      description: "-Serve the compote in ramekins, small bowls or clean jam jars, with a generous dollop of vanilla custard. <br />",
      description2: "Sprinkle the chocolate shavings and pomegranate seeds on top, and finish with the mint leaves.<br />",
      image: "../../../www/images/step3.jpg"
    }
  ];
}
