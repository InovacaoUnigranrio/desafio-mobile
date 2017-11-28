import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Task } from "../domain/task/task";

import "rxjs/add/operator/map";

@Injectable()
export class TaskService {

  private _apiUrl: string = "http://localhost:8080/v1/task-list";

  public _task: Task;

  constructor(private _http: Http) {}

  getAllTasks() {
    return new Promise(resolve => {
      this._http.get(this._apiUrl)
        .map(res => res.json())
        .subscribe(task => {
          this._task = task;
          resolve(this._task);
        })
    });
  }
}
