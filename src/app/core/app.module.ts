import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from '../page/container/index/index.component';
import { HomeComponent } from '../page/container/home/home.component';

// 导入路由文件
import { AppRoutingModule } from '@router/app-routing.module';

console.log( AppRoutingModule );
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
