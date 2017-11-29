import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ServiceProvider } from '../../providers/service/service';
import { ExibirPage } from '../exibir/exibir';

@IonicPage()
@Component({
  selector: 'page-visualizar',
  templateUrl: 'visualizar.html',
})
export class VisualizarPage {

  tarefas : any[];
  tarefaAtualizada = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service : ServiceProvider, public alertCtrl: AlertController) {
    this.tarefaAtualizada = navParams.get('tarefaAtualizada');
  }

  ionViewDidEnter() {
    this.getDados(); // Inicio da requisição    
  }

  abrirTarefa(status, nome, descricao, datainicio, datafim, id) {
    this.navCtrl.push(ExibirPage, {
      status: status,
      nome: nome,
      descricao: descricao,
      datainicio: datainicio,
      datafim: datafim,
      id: id
    })
  }

  deletarTarefa(tarefa) {
    this.service.excluirTarefa(tarefa.id).subscribe(
      data=>{
            console.log(data.mensage);
            this.getDados();
      },
      err=>console.log(err)
    );
  }

  editarTarefa(tarefa) {
    let prompt = this.alertCtrl.create({
      title: 'Editar Tarefa',
      inputs: [
        {
          name: 'nome',
          placeholder: 'nome',
          value:tarefa.nome
        },
        {
          name: 'descricao',
          placeholder: 'descricao',
          value:tarefa.descricao
        },
        {
          name: 'datainicio',
          placeholder: 'datainicio',
          value:tarefa.datainicio
        },
        {
          name: 'datafim',
          placeholder: 'datafim',
          value:tarefa.datafim
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {}
        },
        {
          text: 'Salvar',
          handler: data => {
            
            let params:any={
              nome: data.nome,
              descricao: data.descricao,
              datafim: data.datafim,
              datainicio: data.datainicio,
              status: tarefa.status,
              id: tarefa.id
            }
            console.log(data);
            this.service.atualizarTarefa(params).subscribe(
              data=>{
                console.log(data.mensage),
                this.getDados()
              },
              err=>console.log(err)
            );
          }
        }
      ]
    });
    prompt.present();
  }

  getDados () {
    this.service.getData().subscribe(
      data=>this.tarefas = data,
      err=>console.log(err)
    );
  }

}
