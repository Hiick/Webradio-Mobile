import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//alert 
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { NotificationPage } from '../notification/notification';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

  constructor(public http: HttpClient, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  forgetPasswordRequest: Observable<any>;

  data = {
    email : ''
  }

  async toastControl (msg: string) {
    const daToast = await this.toast.create({
        message: msg,
        duration: 5000,
        position: 'bottom'
    });
    daToast.present();
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

  public goForgetPassword(http: HttpClient) {
    if (this.data.email =="") {
      console.log("Les champs doivent obligatoirement être remplies !")
      this.toastControl("Les champs doivent obligatoirement être remplies !")
    }
    console.log(this.data);
    this.forgetPasswordRequest = this.http
    .post('https://webradio-stream.herokuapp.com/auth/forgot/password', 
    this.data
    //{ "headers": {"Content-Type": "application/x-www-form-urlencoded"}}
    );

    this.forgetPasswordRequest
    .subscribe(data => {
      console.log('my data: ', data); 
      
      //this.toastControl("Un mail a bien été envoyé !")
      this.goToLogin()
    }, error => {
      if(error)
      {
        //console.log(error.error.mess)
        this.toastControl("error")
      }
    })
  }
}
