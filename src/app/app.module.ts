import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import {RouterModule, Routes} from '@angular/router';
import {Module1Module} from './modules/module1/module1.module';
import { MainComponent } from './main/main.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';

const routes: Routes = [
    {path: '', redirectTo: 'app', pathMatch: 'full'},
    {path: 'app', component: MainComponent, children: [
            {path: 'mod1', loadChildren: './modules/module1/module1.module#Module1Module', outlet: 'app_main_outlet'},
            {path: 'mod2', loadChildren: './modules/module2/module2.module#Module2Module', outlet: 'app_main_outlet'},
            {path: 'side1', component: Sidebar1Component, outlet: 'app_side_outlet'},
            {path: 'side2', component: Sidebar2Component, outlet: 'app_side_outlet'}
        ] }
];

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    MainComponent,
    Sidebar1Component,
    Sidebar2Component
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(
          routes,
          {enableTracing: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
