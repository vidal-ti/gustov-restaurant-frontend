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
import { SaleListComponent } from '../sale-list/sale-list.component';
import { SaleComponent } from '../sale/sale.component';
import { SaleRoutingModule } from './sale.routing';
import { SaleService } from './sale.service';
import { UserService } from '../../users/shared/user.service';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [SaleListComponent, SaleComponent],
  imports: [
    CommonModule,
    FormsModule,
    SaleRoutingModule,
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
  providers:[SaleService, ConfirmationService, UserService]
})
export class SaleModule { }
