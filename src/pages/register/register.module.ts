import { NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

//FB

//FB
//import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
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

  
  constructor() {//FB
    
  }
  //FB
  
  //ENDFB
}
