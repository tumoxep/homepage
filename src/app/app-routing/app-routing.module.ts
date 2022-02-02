import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HomeComponent } from '../home/home.component';
import { ShowcaseComponent } from '../showcase/showcase.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'showcase', component: ShowcaseComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
