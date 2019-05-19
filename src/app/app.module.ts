import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { HomePage } from 'src/pages/home/home.page';
import { AddPlacePage } from 'src/pages/add-place/add-place.page';
import { PlacePage } from 'src/pages/place/place.page';
import { SetLocationPage } from 'src/pages/set-location/set-location.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
],
  entryComponents: [
    AppComponent,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
  ],
  imports: [BrowserModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
