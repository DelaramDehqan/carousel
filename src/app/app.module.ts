import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [AppComponent, CarouselComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: 'carsouel', component: CarouselComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
