import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1MainComponent } from './module1-main/module1-main.component';
import { Mod1MenuComponent } from './mod1-menu/mod1-menu.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Sec1Component } from './sec1/sec1.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [Module1MainComponent, Mod1MenuComponent, Screen1Component, Screen2Component, Sec1Component]
})
export class Module1Module { }
