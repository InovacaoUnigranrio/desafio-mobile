import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";
import { Task } from "../../domain/task/task";
import { TaskService } from "../../providers/task-service";

@Component({
	templateUrl: 'selected-task.html'
})
export class SelectedTaskPage {

	public task: Task;

	constructor(public navParams: NavParams, public navCtrl: NavController, private _taskService: TaskService){
		this.task = this.navParams.get('taskSelected');
	}

	deleteTask(){
		this._taskService
			.deleteTask(this.task)
			.subscribe(res => {
				console.log(res);
				this.navCtrl.pop();
			});
	}
}
