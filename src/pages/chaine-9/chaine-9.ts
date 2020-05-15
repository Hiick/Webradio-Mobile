import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ChaineRecPage } from '../chaine-rec/chaine-rec';
import { Chaine_1Page } from '../chaine-1/chaine-1';


/**
 * Generated class for the Chaine_9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chaine-9',
  templateUrl: 'chaine-9.html',
})
export class Chaine_9Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chaine_9Page');
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

  public goToChaineRec() {
    this.navCtrl.setRoot(ChaineRecPage)
  }

  public goToChaine1() {
    this.navCtrl.setRoot(Chaine_1Page)
  }
}
