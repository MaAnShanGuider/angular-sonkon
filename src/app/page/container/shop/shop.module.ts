import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: [ShopDetailComponent]
})
export class ShopModule { }
