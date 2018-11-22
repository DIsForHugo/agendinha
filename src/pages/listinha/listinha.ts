import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { DetalheItemPage } from '../detalhe-item/detalhe-item';
import { Data } from '../../providers/data/data';

 
@Component({
  selector: 'page-home',
  templateUrl: 'listinha.html'
})

export class ListinhaPage {
  public items = [];
 
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public dataService: Data) {
  
    this.dataService.getData().then((todos) => {

      if(todos) {
        this.items = todos;
      }
    });
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
    this.dataService.save(this.items);
  }
 
  viewItem(item){
    this.navCtrl.push(DetalheItemPage, {
      item: item
    });
  }
}
 