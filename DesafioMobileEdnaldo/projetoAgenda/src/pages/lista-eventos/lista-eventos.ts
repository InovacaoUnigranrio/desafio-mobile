import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users' ;
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Request } from 'Request' ;


@Component({
  selector: 'page-lista-eventos',
  templateUrl: 'lista-eventos.html',
})



export class ListaEventosPage {

agenda: any[] = [] ;

 //Construtor da classe
 constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider:UsersProvider) {
 
    }
    


   //Carrega o provider e o request http
   ionViewDidLoad() { 
    
   
				this.userProvider.listarEventos().subscribe(data => {
    		   
                    this.agenda = data['agenda'] ;
    			    console.log(data) ; 

    			},

    			Error => { 

                 console.log(Error) ;
    			}

          		);

	
   }
}

