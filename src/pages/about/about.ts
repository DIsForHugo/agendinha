import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  sono = {dormir: '', acordar: ''}

  constructor(public navCtrl: NavController,
    public view: ViewController,
    private storage: Storage) {

  }

  saveItem() {
    let horarioDeSono = {
      dormir: this.sono.dormir,
      acordar: this.sono.acordar
    }
    this.storage.set("Meu Sono", horarioDeSono);
    this.view.dismiss(horarioDeSono);
  }

}
