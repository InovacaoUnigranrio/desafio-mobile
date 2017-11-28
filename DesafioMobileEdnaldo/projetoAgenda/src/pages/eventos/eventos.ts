import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewEventosPage } from '../new-eventos/new-eventos' ;
import { ListaEventosPage } from '../lista-eventos/lista-eventos' ;

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

 novoEvents() { 

 
 this.navCtrl.push(NewEventosPage) ;

 } 

 listaEvents() { 

   this.navCtrl.push(ListaEventosPage) ;


 }


}
