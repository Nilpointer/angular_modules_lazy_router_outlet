import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import {RouterModule, Routes} from '@angular/router';
import {Module1Module} from './modules/module1/module1.module';

const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full' },
    {path: 'mod1', loadChildren: './modules/module1/module1.module#Module1Module'},
    {path: 'mod2', loadChildren: './modules/module2/module2.module#Module2Module'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent
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
