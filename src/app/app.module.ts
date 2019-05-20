import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPlacePage } from '../pages/add-place/add-place';
import { PlacePage } from '../pages/place/place.page';
import { SetLocationPage } from '../pages/set-location/set-location';
import { AgmCoreModule } from '@agm/core';

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
  imports: [
    IonicModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBX5oQ2ZkMKJ_HVqO8q-sE3QPvj3ZJxY0Y'
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
