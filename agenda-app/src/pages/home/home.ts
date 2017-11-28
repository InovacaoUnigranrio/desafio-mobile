import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { Task } from "../../domain/task/task";

import { TaskPage } from '../task/task';
import { NewTaskPage } from '../new-task/new-task';

import "rxjs/add/operator/map";
import { TaskService } from '../../providers/task-service';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit {

	public tasks: Task[];

	constructor(public navCtrl: NavController,
		private _loadingCtrl: LoadingController,
		private _taskService: TaskService) {
		
	}   

	ngOnInit() {
		let loader = this._loadingCtrl.create({
			content: 'Carregando eventos...'
		});

		loader.present();
		this._taskService.getAllTasks()
			.then(data => {
				this.tasks = data;
				loader.dismiss();
				console.log(this.tasks);
			})

		// this._http
		// 	.get("http://localhost:8080/v1/task-list")
		// 	.map(res => res.json())
		// 	.toPromise()
		// 	.then(taskList => {
		// 			this.taskList = taskList;
		// 			loader.dismiss();
		// 	})
		// 	.catch(err => {
		// 			console.log(err);
		// 	});
	}

	selectTask(task) {
		this.navCtrl.push(TaskPage, { taskSelected: task });
	}

	addTask(){
		this.navCtrl.push(NewTaskPage);
	}
}
