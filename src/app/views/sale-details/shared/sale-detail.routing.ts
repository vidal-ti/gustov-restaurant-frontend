import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SaleDetailListComponent } from '../sale-detail-list/sale-detail-list.component';

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: SaleDetailListComponent }
  ])],
  exports: [RouterModule]
})
export class SaleDetailRoutingModule { }
