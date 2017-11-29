import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { Task } from '../domain/task/task';

import "rxjs/add/operator/map";

@Injectable()
export class TaskService {

  private _apiUrl: string = "http://localhost:8080/v1/task-list";
  private _headers: Headers;

  constructor(private _http: Http) {
    this._headers = new Headers();
    this._headers.append("Content-Type", "application/json");
  }

  // Listagem de todos os eventos
  getAllTasks() {
    return this._http
      .get(this._apiUrl)
      .map(res => res.json())
      .toPromise();
  }

  // Armazenamento dos eventos
  saveTask(data: Task) {
    return new Promise((resolve, reject) => {
      this._http
        .post(this._apiUrl, JSON.stringify(data), { headers: this._headers })
        .subscribe(res => {
            resolve(res);
          }, err => {
            reject(err);
          }
        );
    })
  }

  // Remove evento pelo id
  deleteTask(data: Task){
    return this._http
      .delete(this._apiUrl + '/' + data.id);
  }
}
