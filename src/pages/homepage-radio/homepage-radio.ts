import { Chaine_9Page } from './../chaine-9/chaine-9';
//import { HomepageRadioPage } from './homepage-radio';
//import { HomepageRadioPage } from '../homepage-radio/homepage-radio.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { HomepageChainePage } from '../homepage-chaine/homepage-chaine';

/**
 * Generated class for the HomepageRadioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage-radio',
  templateUrl: 'homepage-radio.html',
})
export class HomepageRadioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepageRadioPage');
  }

  public goToAccount() {
    this.navCtrl.setRoot(AccountPage)
  }

  public goToHomePageChaine() {
    this.navCtrl.setRoot(HomepageChainePage)
  }

  public goToChaine9() {
    this.navCtrl.setRoot(Chaine_9Page)
  }

  public goToHomePageRadio() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }
}
