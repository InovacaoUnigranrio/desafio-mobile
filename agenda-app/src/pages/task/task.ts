import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

@Component({
	templateUrl: 'task.html'
})
export class TaskPage {

	public task;

	constructor(public navParams: NavParams, public navCtrl: NavController){
		this.task = this.navParams.get('taskSelected');
	}
}
