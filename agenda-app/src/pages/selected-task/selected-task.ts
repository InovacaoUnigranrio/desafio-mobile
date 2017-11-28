import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

@Component({
	templateUrl: 'selected-task.html'
})
export class SelectedTaskPage {

	public task;

	constructor(public navParams: NavParams, public navCtrl: NavController){
		this.task = this.navParams.get('taskSelected');
	}
}
