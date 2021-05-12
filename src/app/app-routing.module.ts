import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryListDetailComponent } from './country-list/country-list-detail/country-list-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { ForecastComponent } from './forecast/forecast.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  } ,  { 
    path: 'forecast',
    component: ForecastComponent}, {
    path: 'home',
    component: CountryListComponent,
  }, {
    path: 'home/:country',
    component: CountryListDetailComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
