import { Component,  OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//http
import { HttpClient } from '@angular/common/http';

//FB
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
<<<<<<< HEAD
=======
import {LoginPage} from "../login/login";
>>>>>>> f550f729f10ee99323e6210f098db9a3c6e0dd01
//import { Response } from '@angular/http';//Headers RequestOptions
//import { map } from 'rxjs/operators';


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
export class RegisterPage implements OnInit {

  loggedIn: boolean = false;
  //FB
  user: SocialUser;
<<<<<<< HEAD
  
=======

>>>>>>> f550f729f10ee99323e6210f098db9a3c6e0dd01
  //ENDFB
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  requestFacebook() {
    //Http.get('/someUrl', config).then(successCallback, errorCallback);
    return this.http.get("http://localhost:3000/auth/facebook").subscribe((data) => {
      console.log(data)
<<<<<<< HEAD
      
=======
>>>>>>> f550f729f10ee99323e6210f098db9a3c6e0dd01
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
<<<<<<< HEAD
  
=======

>>>>>>> f550f729f10ee99323e6210f098db9a3c6e0dd01
  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
<<<<<<< HEAD
}
=======

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }


}
>>>>>>> f550f729f10ee99323e6210f098db9a3c6e0dd01
