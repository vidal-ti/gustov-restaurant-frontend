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
import { SaleService } from '../../sales/shared/sale.service';
import { DishService } from '../../dishes/shared/dish.service';
import { ReportSaleListComponent } from '../report-sale-list/report-sale-list.component';
import { ResportSaleRoutingModule } from './resport-sale.routing';
import { ExcelService } from 'src/app/core/excel.service';
import { PdfService } from 'src/app/core/pdfService';

@NgModule({
  declarations: [ReportSaleListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ResportSaleRoutingModule,
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
    InputTextareaModule
  ],
  providers:[ ConfirmationService, SaleService, DishService, ExcelService, PdfService]
})
export class ResportSaleModule { }
