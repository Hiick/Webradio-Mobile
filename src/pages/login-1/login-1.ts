import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//alert 
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { NotificationPage } from '../notification/notification';
/**
 * Generated class for the Login_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-1',
  templateUrl: 'login-1.html',
})
export class Login_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login_1Page');
  }

  alertMail() {
    let alert = this.alertCtrl.create({
      title: 'Mail',
      subTitle: 'Un mail à bien été envoyé !',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  public goToRegister() {
    this.navCtrl.setRoot(RegisterPage)
  }

  public goToLogin1() {
    this.navCtrl.setRoot(Login_1Page)
  }

  public goToHomePage() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

  public goToNotification() {
    this.navCtrl.setRoot(NotificationPage)
  }
}
