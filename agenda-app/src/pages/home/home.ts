import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { NavController, LoadingController } from 'ionic-angular';

import { Task } from "../../domain/task";

import { TaskPage } from '../task/task';
import { NewTaskPage } from '../new-task/new-task';

import "rxjs/add/operator/map";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit {

	public taskList: Task[];

	constructor(public navCtrl: NavController,
		private _loadingCtrl: LoadingController,
		private _http: Http) {
		
	}   

	ngOnInit() {
		let loader = this._loadingCtrl.create({
			content: 'Carregando eventos...'
		});

		loader.present();
		this._http
            .get("http://localhost:8080/tasks")
            .map(res => res.json())
            .toPromise()
            .then(taskList => {
                this.taskList = taskList;
                loader.dismiss();
            })
            .catch(err => {
                console.log(err);
            });
	}

	selectTask(task) {
		this.navCtrl.push(TaskPage, { taskSelected: task });
	}

	addTask(){
		this.navCtrl.push(NewTaskPage);
	}
}
