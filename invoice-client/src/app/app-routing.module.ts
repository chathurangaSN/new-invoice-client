import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'loyalty', component: LoyaltyComponent },
  { path: 'invoice', component: InvoiceComponent},
  { path: 'parent', component: ParentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
