import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
	templateUrl: "new-task.html"
})
export class NewTaskPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
