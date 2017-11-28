
import {HttpClient} from '@angular/common/http' ;
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersProvider {

	private URL = 'http://localhost:8080/agenda'

    

  constructor(public http: HttpClient) {
    
  }


 //Função para tentar requisição HTTP no Webservice
 listarEventos(dataInicio? : string, dataFim? : string, descricao? : string, nomeEvento?: string) { 


return this.http.get(this.URL)

  
  } 

}


