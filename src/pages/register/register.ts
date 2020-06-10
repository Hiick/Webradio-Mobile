import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
//http
import { HttpClient } from '@angular/common/http';

//FB
//import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import {LoginPage} from "../login/login";

//import { Response } from '@angular/http';//Headers RequestOptions
//import { map } from 'rxjs/operators';
import { NotificationPage } from '../notification/notification';

import { ToastController } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage  {

  //loggedIn: boolean = false;
  //FB
  //user: SocialUser;
  //ENDFB

  registerRequest: Observable<any>;

  data = {
    email : '',
    username : '',
    password : ''

  }

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {  
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
    console.log('ionViewDidLoad RegisterPage');
  }

  //requestFacebook() {
    //Http.get('/someUrl', config).then(successCallback, errorCallback);
  //  return this.http.get("http://localhost:3000/auth/facebook").subscribe((data) => {
  //    console.log(data)
  //  });
  //}

  //signInWithFB(): void {
  //  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  //}
  //signOut(): void {
  //  this.authService.signOut();
  //}

  //ngOnInit() {
  //  this.authService.authState.subscribe((user) => {
  //    this.user = user;
  //    this.loggedIn = (user != null);
  //    console.log(this.user);
  //  });
  //}

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

  public goToNotification() {
    this.navCtrl.setRoot(NotificationPage)
  }

  public goRegister(http: HttpClient) {

   
    console.log(this.data);
    this.registerRequest = this.http
    .post('https://webradio-stream.herokuapp.com/auth/register', 
    this.data
    //{ "headers": {"Content-Type": "application/x-www-form-urlencoded"}}
    );

    this.registerRequest
    .subscribe(data => {
      console.log('my data: ', data);
      localStorage.setItem('token', data.message.token);
      this.toastControl("Inscription effectuée avec succès !")
      this.goToLogin()
    }, error => {
      if(error.error.error)
      {
        //console.log(error.error.error[0].msg)
        this.toastControl(error.error.message.message)
      }
    })
  } 
}