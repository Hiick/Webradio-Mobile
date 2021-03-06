import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RadioSubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio-subscribe',
  templateUrl: 'radio-subscribe.html',
})
export class RadioSubscribePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioSubscribePage');
  }

  public addFavoritee() {
    document.getElementById("like-button-red").style.display = "block";
    document.getElementById("like-button-white").style.display = "none";
  }
}
