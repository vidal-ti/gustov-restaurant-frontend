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
import { UserService } from '../../users/shared/user.service';
import { TooltipModule } from 'primeng/tooltip';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { MenuRoutingModule } from './menu.routing';
import { DishService, UpdateImageService } from '../../dishes/shared/dish.service';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [MenuListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutingModule,
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
    RatingModule,
    TagModule
  ],
  providers:[ConfirmationService, UpdateImageService, DishService]
})
export class MenuModule { }
