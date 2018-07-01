import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from "@page/container/home/home.component";
import { IndexComponent } from "@page/container/index/index.component";

const appRoutes: Routes = [
 { path: 'index', component: IndexComponent },
 { path: "home", component: HomeComponent },
 { path: "", redirectTo: 'index', pathMatch: "full" } 
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})


export class AppRoutingModule { 
  static routes: Routes = appRoutes;
}

