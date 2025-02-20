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
import { DishListComponent } from '../dish-list/dish-list.component';
import { DishComponent } from '../dish/dish.component';
import { DishRoutingModule } from './dish.routing';
import { DishService, UpdateImageService } from './dish.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [DishListComponent, DishComponent],
  imports: [
    CommonModule,
    FormsModule,
    DishRoutingModule,
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
    TooltipModule,
    FileUploadModule
  ],
  providers:[DishService, ConfirmationService, UpdateImageService]
})
export class DishModule { }
