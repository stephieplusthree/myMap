import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: '.pages/home/home.module#HomePageModule' },
  { path: 'place', loadChildren: '.pages/place/place.module#PlacePageModule' },
  { path: 'add-place', loadChildren: '.pages/add-place/add-place.module#AddPlacePageModule' },
  { path: 'set-location', loadChildren: 'pages./set-location/set-location.module#SetLocationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
