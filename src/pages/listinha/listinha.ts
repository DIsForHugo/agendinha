import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
 
@Component({
  selector: 'page-home',
  templateUrl: 'listinha.html'
})
export class ListinhaPage {
 
  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
 
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
 
  }
 
}