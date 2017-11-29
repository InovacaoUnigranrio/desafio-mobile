import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibirPage } from './exibir';

@NgModule({
  declarations: [
    ExibirPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibirPage),
  ],
})
export class ExibirPageModule {}
