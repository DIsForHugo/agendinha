import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheItemPage } from './detalhe-item';

@NgModule({
  declarations: [
    DetalheItemPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheItemPage),
  ],
})
export class DetalheItemPageModule {}
