import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigate() {

  		this.navCtrl.push(EventosPage) ;

  				
             }

      }


