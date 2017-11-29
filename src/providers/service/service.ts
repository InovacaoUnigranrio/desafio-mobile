import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceProvider {

  api:String = "http://livrariamercury.16mb.com/apiUnigranrio/";

  constructor(public http: Http) {
  }

  getData() {
    return this.http.get(this.api + 'apiRecupera.php').map(res => res.json())
  }

  postData(params) {
    let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    return this.http.post(this.api + "apiCadastro.php", params, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response) => {return res.json();}
    );
  }

  atualizarTarefa(params) {
    let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    return this.http.post(this.api + "apiUpdate.php", params, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response) => {return res.json();}
    );
  }

  excluirTarefa(id) {
    let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    return this.http.post(this.api + "apiDeleta.php", id, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response) => {return res.json();}
    );
  }

}
