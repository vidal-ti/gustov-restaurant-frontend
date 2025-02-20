import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SaleListComponent } from '../sale-list/sale-list.component';

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: SaleListComponent }
  ])],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
