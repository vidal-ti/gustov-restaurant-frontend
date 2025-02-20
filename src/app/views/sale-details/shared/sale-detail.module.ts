import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SaleDetailListComponent } from '../sale-detail-list/sale-detail-list.component';
import { SaleDetailComponent } from '../sale-detail/sale-detail.component';
import { SaleDetailRoutingModule } from './sale-detail.routing';
import { SaleDetailService } from './sale-detail.service';
import { SaleService } from '../../sales/shared/sale.service';
import { DishService } from '../../dishes/shared/dish.service';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [SaleDetailListComponent, SaleDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SaleDetailRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    DividerModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    ToastModule,
    ConfirmDialogModule,
    TagModule,
    PasswordModule,
    InputNumberModule,
    InputTextareaModule,
    TooltipModule
  ],
  providers:[SaleDetailService, ConfirmationService, SaleService, DishService]
})
export class SaleDetailModule { }
