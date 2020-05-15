import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//alert 
import { AlertController } from 'ionic-angular';
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

}
