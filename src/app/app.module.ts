import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/HomePage/about/about.component';
import { HomepageNavbarComponent } from './Components/HomePage/homepage-navbar/homepage-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomepageNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
