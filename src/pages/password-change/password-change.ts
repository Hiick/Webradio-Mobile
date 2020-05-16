import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountSettingsPage } from '../account-settings/account-settings';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the PasswordChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-change',
  templateUrl: 'password-change.html',
})
export class PasswordChangePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordChangePage');
  }

  public goToAccountSettings() {
    this.navCtrl.setRoot(AccountSettingsPage)
  }
}
