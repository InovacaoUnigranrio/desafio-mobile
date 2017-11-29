import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-new-eventos',
  templateUrl: 'new-eventos.html',
})


export class NewEventosPage {

constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {

  }

//Chamando a função de alerta sucesso
sucessoEvento() {
  let alert = this.alertCtrl.create({
    title: 'Evento adicionado',
    subTitle: 'Parabéns, o seu evento foi adicionado com sucesso',
    buttons: ['OK']
  });
  alert.present();
}



}
