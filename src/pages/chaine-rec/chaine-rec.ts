import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chaine_9Page } from '../chaine-9/chaine-9';
import { AccountPage } from '../account/account';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';


/**
 * Generated class for the ChaineRecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chaine-rec',
  templateUrl: 'chaine-rec.html',
})
export class ChaineRecPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChaineRecPage');
  }
  public goToHomepage() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

  public goToAccount() {
    this.navCtrl.setRoot(AccountPage)
  }

  public goToChaine9() {
    this.navCtrl.setRoot(Chaine_9Page)
  }
}
