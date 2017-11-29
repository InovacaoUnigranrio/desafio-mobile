import { Component } from "@angular/core";
import { NavController, NavParams, Alert, AlertController } from "ionic-angular";

import { Task } from "../../domain/task/task";
import { TaskService } from "../../providers/task-service";
import { HomePage } from "../home/home";

@Component({
  templateUrl: "new-task.html"
})
export class NewTaskPage {

  public task: Task = { nome: '', descricao: '', dataInicio: '', dataFim: '', id: 0 };
  private _alert: Alert;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _taskService: TaskService,
    private _alertCtrl: AlertController) {

      this._alert = this._alertCtrl.create({
        buttons: [
          { text: "Ok", handler: () => this.navCtrl.setRoot(HomePage) }
        ]
      });
  }

  addNewTask() {
    this._taskService
      .saveTask(this.task)
      .then((result) => {
        console.log(result);

        if(result) {
          this._alert.setTitle("Tarefa criada com sucesso");
        } else {
          this._alert.setTitle("Ocorreu algum erro, tente novamente");
        }

        this._alert.present();
      }, (err) => {
        console.log(err);
        this._alert.setSubTitle(err.message);
        this._alert.present();
      });
  }
}
