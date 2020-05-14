import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomepageRadioPage } from './homepage-radio';

@NgModule({
  declarations: [
    HomepageRadioPage,
  ],
  imports: [
    IonicPageModule.forChild(HomepageRadioPage),
  ],
})
export class HomepageRadioPageModule {}
