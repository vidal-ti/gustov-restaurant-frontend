import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportSaleListComponent } from '../report-sale-list/report-sale-list.component';

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: ReportSaleListComponent }
  ])],
  exports: [RouterModule]
})
export class ResportSaleRoutingModule { }
