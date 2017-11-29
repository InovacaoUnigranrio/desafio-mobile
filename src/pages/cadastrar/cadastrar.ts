import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

import { ServiceProvider } from '../../providers/service/service';
import { VisualizarPage } from '../visualizar/visualizar';

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  cadastro : any = {};

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public service : ServiceProvider) {
    this.cadastro = this.formBuilder.group({
      nome:['', Validators.required],
      descricao:['', Validators.required],
      dataInicio:['', Validators.required],
      dataFim:['', Validators.required]
    });
  }
  
  postDados() {
    this.service.postData(this.cadastro.value).subscribe(
      data=>{
        this.navCtrl.push(VisualizarPage)
      },
      err=>console.log(err)
    );
  }

}
