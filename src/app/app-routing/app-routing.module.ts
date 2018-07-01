import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from "@page/container/home/home.component";
import { IndexComponent } from "@page/container/index/index.component";

const appRoutes: Routes = [
 { path: '', component: IndexComponent },
 { path: "home", component: HomeComponent } 
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

