import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';
import { ContectComponent } from './contect/contect.component';

const routes: Routes = [
  {path:"agency",component:AgencyComponent},
  {path:"contect",component:ContectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
