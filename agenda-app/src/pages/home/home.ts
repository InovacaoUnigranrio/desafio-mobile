import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { Task } from "../../domain/task/task";
import { SelectedTaskPage } from '../selected-task/selected-task';
import { NewTaskPage } from '../new-task/new-task';
import { TaskService } from '../../providers/task-service';

import "rxjs/add/operator/map";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public tasks: Task[];

	constructor(public navCtrl: NavController,
		private _alertCtrl: AlertController,
		private _loadingCtrl: LoadingController,
		private _taskService: TaskService) {
		
	}   

	ionViewDidEnter() {
		let loader = this._loadingCtrl.create({
			content: 'Carregando tarefas...'
		});

		loader.present();

		// Carrega servico de listagem da API
		this._taskService.getAllTasks()
			.then(data => {
					this.tasks = data;
					loader.dismiss();
			})
			.catch(err => {
					this._alertCtrl
						.create({
							title: 'Ocorreu um erro',
							subTitle: 'Não foi possível obter os dados. Tente novamente mais tarde.',
							buttons: [{ text: 'Ok'}]
						}).present();
			});
	}

	selectTask(task) {
		this.navCtrl.push(SelectedTaskPage, { taskSelected: task });
	}

	createTask(){
		this.navCtrl.push(NewTaskPage);
	}
}
