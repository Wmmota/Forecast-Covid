import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryListComponent } from './country-list/country-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  } ,  { 
    path: 'login',
    component: LoginComponent}, {
    path: 'home',
    component: CountryListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
