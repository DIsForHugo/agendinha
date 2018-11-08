import { Component } from '@angular/core';
import { NavController, ViewController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

 
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
 
  data = { title:'', description:'', date:'', time:'' };

  constructor(public navCtrl: NavController, 
    public view: ViewController, 
    public localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController) {
    
  }
 
  saveItem(){
 
    let newItem = {
      title: this.data.title,
      description: this.data.description,
    };
 
    this.view.dismiss(newItem);
 
  }
  //coisas da notificação
  submit() {
    console.log(this.data);
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);
    this.localNotifications.schedule({
       text: this.data.title,
       led: 'FF0000',
       sound: this.setSound(),
    });
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+date,
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:'', date:'', time:'' };

    this.saveItem();
  }

  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/Rooster.mp3'
    } else {
      return 'file://assets/sounds/Rooster.caf'
    }
  }
 
  close(){
    this.view.dismiss();
  }
 
}