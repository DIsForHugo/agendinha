import { Component } from '@angular/core';
import { ModalController, NavController, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
//import { Data } from '../../providers/data/data'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  sono = {dormir: '', acordar: ''}

  constructor(public modalCtrl: ModalController,
    public navCtrl: NavController,
    public view: ViewController,
    private storage: Storage,
    public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {

  }

  saveItem() {
    let horarioDeSono = {
      dormir: this.sono.dormir,
      acordar: this.sono.acordar
    }
    this.storage.set("Meu Sono", horarioDeSono);
    this.view.dismiss(horarioDeSono);
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
