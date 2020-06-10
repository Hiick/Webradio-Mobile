import { NgModule} from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { RegisterPage } from './register';
import { Observable } from 'rxjs/Observable';
//FB

//FB
//import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
//ENDFB
//ENDFB

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    //FB
    //ENDFB
  ],
})

export class RegisterPageModule {

  registerRequest: Observable<any>;
  
  constructor(public NavController, public HttpClient: HttpClient) {
    this.registerRequest = this.HttpClient.get('https://webradio-stream.herokuapp.com/auth/register');
    this.registerRequest
    .subscribe(data => {
      console.log('my data: ', data);
    })
  }
}
