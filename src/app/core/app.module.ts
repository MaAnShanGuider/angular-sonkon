import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { IndexComponent } from '../page/container/index/index.component';
import { HomeComponent } from '../page/container/home/home.component';

// 导入路由文件
import { AppRoutingModule } from '@router/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(AppRoutingModule.routes,),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
