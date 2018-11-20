import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { DetalheItemPage } from '../detalhe-item/detalhe-item';

 
@Component({
  selector: 'page-home',
  templateUrl: 'listinha.html'
})

export class ListinhaPage {
  public items = [];
 
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {
  }

  ionViewDidLoad(){
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
  }
 
  viewItem(item){
    this.navCtrl.push(DetalheItemPage, {
      item: item
    });
  }
}
 