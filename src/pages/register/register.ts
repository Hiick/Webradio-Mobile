import { Component,  OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//http
import { HttpClient } from '@angular/common/http';

//FB
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
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
      
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
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
}