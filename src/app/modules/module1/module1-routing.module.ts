import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module1MainComponent } from './module1-main/module1-main.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import {Sec1Component} from './sec1/sec1.component';

const routes: Routes = [
    {path: '', redirectTo: 'lm'},
    {
        path: 'lm', component: Module1MainComponent, children: [
            {path: 'screen1', component: Screen1Component, outlet: 'main', children: [
                    {path: 'sec1', component: Sec1Component, outlet: 'sec1_out'}
                ]},
            {path: 'screen2', component: Screen2Component, outlet: 'main'}
        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
