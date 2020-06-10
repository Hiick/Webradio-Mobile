import { HomepageRadioPage } from '../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import { Login_1Page } from '../login-1/login-1';
import { NotificationPage } from '../notification/notification';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  loginRequest: Observable<any>;

  data = {
    email : '',
    password : ''
  }


  async toastControl (msg: string) {
    const daToast = await this.toast.create({
        message: msg,
        duration: 5000,
        position: 'bottom'
    });
    daToast.present();
}

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {  
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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

  public goToNotification() {
    this.navCtrl.setRoot(NotificationPage)
  }

  public goLogin(http: HttpClient) {
    if (this.data.email =="" || this.data.password =="") {
      console.log("Les champs doivent obligatoirement être remplies !")
      this.toastControl("Les champs doivent obligatoirement être remplies !")
    }
    console.log(this.data);
    this.loginRequest = this.http
    .post('https://webradio-stream.herokuapp.com/auth/login', 
    this.data
    //{ "headers": {"Content-Type": "application/x-www-form-urlencoded"}}
    );

    this.loginRequest
    .subscribe(data => {
      console.log('my data: ', data); 
      localStorage.setItem('token', data.message.token);
      this.toastControl(data.message.message)
      this.goToHomePage()
    }, error => {
      if(error && (this.data.email !="" || this.data.password !=""))
      {
        //console.log(error.error.mess)
        this.toastControl(error.error.message.message)
      }
    })
  } 
}
