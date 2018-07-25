import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Module2MainComponent} from './module2-main/module2-main.component';

const routes: Routes = [
    {path: '', component: Module2MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
