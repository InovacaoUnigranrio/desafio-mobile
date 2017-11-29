import { Component } from '@angular/core';
import { SobrePage } from '../sobre/sobre';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { VisualizarPage } from '../visualizar/visualizar';
import { ExibirPage } from '../exibir/exibir';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  sobrePage = SobrePage;
  cadastrarPage = CadastrarPage;
  visualizarPage = VisualizarPage;
  exibirPage = ExibirPage;

}
