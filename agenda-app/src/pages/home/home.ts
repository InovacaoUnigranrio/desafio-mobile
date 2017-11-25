import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TaskPage } from '../task/task';
import { NewTaskPage } from '../new-task/new-task';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public taskList;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.taskList = [
			{
				dataInicio: '10/10/2010 0:00',
				dataFim: '10/10/2010 2:00',
				descricao: 'Ir buscar meu carro na oficina',
				nome: 'Mecânico'
			},
			{
				dataInicio: '11/11/2011 8:00',
				dataFim: '11/11/2011 9:00',
				descricao: 'Dar banho no cachorro',
				nome: 'Banho cachorro'
			}
		]
	}   

	selectTask(task) {
		this.navCtrl.push(TaskPage, { taskSelected: task });
	}

	addTask(){
		this.navCtrl.push(NewTaskPage);
	}
}
