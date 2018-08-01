import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  
	{ path: '', loadChildren: "@page/container/login/login.module#LoginModule" },
	{ path: '', loadChildren: "@page/container/index/index.module#IndexModule" },
  { path: '', loadChildren: "@page/container/home/home.module#HomeModule" },

	{ path: "", redirectTo: '', pathMatch: "full" } 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
  	RouterModule
  ]
})


export class AppRoutingModule { 
}

