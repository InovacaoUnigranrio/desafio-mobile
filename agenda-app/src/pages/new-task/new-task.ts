import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { Task } from "../../domain/task/task";
import { TaskService } from "../../providers/task-service";
import { AlertController } from "ionic-angular/components/alert/alert-controller";


@Component({
  templateUrl: "new-task.html"
})
export class NewTaskPage {

  public task = { nome: '', descricao: '', dataInicio: '', dataFim: '' };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _taskService: TaskService) {

  }

  addNewTask() {
    this._taskService
      .saveTask(this.task)
      .then((result) => {
        console.log(result);
        this.navCtrl.pop();
      }, (err) => {
        console.log(err);
      });
  }
}
