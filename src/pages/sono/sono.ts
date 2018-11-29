import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SonoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sono',
  templateUrl: 'sono.html',
})
export class SonoPage {

  data = {dormir: '', acordar: ''}

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SonoPage');
  }

  submit() {
    this.saveItem()
    let alert = this.alertCtrl.create({
      title: 'Parabéns!',
      subTitle: 'Seu horário de sono foi definido',
      buttons: ['OK']
    });
    alert.present();
    
  }

}
