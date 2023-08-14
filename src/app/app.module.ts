import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderService } from './services/http/order.service';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './pipes/datePipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    OrdersListComponent,
    OrderItemComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
