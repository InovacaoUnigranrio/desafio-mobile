import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import "rxjs/add/operator/map";

@Injectable()
export class TaskService {

  private _apiUrl: string = "http://localhost:8080/v1/task-list";

  constructor(private _http: Http) {}

  getAllTasks() {
    return this._http
      .get(this._apiUrl)
      .map(res => res.json())
      .toPromise();
  }

  saveTask(data) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return new Promise((resolve, reject) => {
      this._http
        .post(this._apiUrl, JSON.stringify(data), { headers: headers })
        .subscribe(res => {
            resolve(res);
          }, err => {
            reject(err);
          }
        );
    })
  }
}
