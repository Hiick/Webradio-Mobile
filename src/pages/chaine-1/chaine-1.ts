import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';

/**
 * Generated class for the Chaine_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chaine-1',
  templateUrl: 'chaine-1.html',
})
export class Chaine_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chaine_1Page');
  }

  public goToHomePageRadio() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

  public goToAccount() {
    this.navCtrl.setRoot(AccountPage)
  }
}
