import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';
import { UserComponent } from '../user/user.component';
import { UserRoutingModule } from './user.routing';
import { UserService } from './user.service';
import { ConfirmationService, MessageService } from 'primeng/api';
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
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
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
    TooltipModule
  ],
  providers:[UserService, ConfirmationService]
})
export class UserModule { }
