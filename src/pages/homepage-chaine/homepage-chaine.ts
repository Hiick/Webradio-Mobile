import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chaine_9Page } from '../chaine-9/chaine-9';

/**
 * Generated class for the HomepageChainePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage-chaine',
  templateUrl: 'homepage-chaine.html',
})
export class HomepageChainePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepageChainePage');
  }

  public goToHomePageRadio() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToChaine9() {
    this.navCtrl.setRoot(Chaine_9Page)
  }
}
