import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './pages/company/company.component';
import { IdCompanyComponent } from './pages/company/id-company/id-company.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'company', pathMatch: 'full'
  },
  {
    path: 'company', component: CompanyComponent,
  },
  {
    path: 'company/:id', component: IdCompanyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
