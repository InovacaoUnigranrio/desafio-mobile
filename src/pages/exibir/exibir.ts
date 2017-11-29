import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceProvider } from '../../providers/service/service';
import { VisualizarPage } from '../visualizar/visualizar';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-exibir',
  templateUrl: 'exibir.html',
})
export class ExibirPage {

  nomeTarefa : any;
  status : any;
  datainicio : any;
  datafim : any;
  descricao : any;
  id : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service : ServiceProvider, public loadingCtrl: LoadingController) {
      this.nomeTarefa = navParams.get('nome');
      this.descricao = navParams.get('descricao');
      this.status = navParams.get('status');
      this.datainicio = navParams.get('datainicio');
      this.datafim = navParams.get('datafim');
      this.id = navParams.get('id');
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde um momento...",
      duration: 1500
    });
    loader.present();
    this.concluirTarefa();
  }

  concluirTarefa() {
    let params:any={
      nome: this.nomeTarefa,
      descricao: this.descricao,
      datafim: this.datafim,
      datainicio: this.datainicio,
      status: 1,
      id: this.id
    }
    this.service.atualizarTarefa(params).subscribe(
      data=>{
        console.log(data.mensage),
        this.navCtrl.push(VisualizarPage, {
          tarefaAtualizada: true
        })
      },
      err=>console.log(err)
    );
  }

}
