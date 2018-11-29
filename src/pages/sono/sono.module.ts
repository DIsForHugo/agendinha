import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SonoPage } from './sono';

@NgModule({
  declarations: [
    SonoPage,
  ],
  imports: [
    IonicPageModule.forChild(SonoPage),
  ],
})
export class SonoPageModule {}
