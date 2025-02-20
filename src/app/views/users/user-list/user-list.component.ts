import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RoleModel, UserModel } from '../shared/user.model';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  @ViewChild(UserComponent) userComponent : UserComponent;
  users: Array<UserModel>;
  constructor(
    private userService : UserService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService, 
  ) {
    this.users = new Array<UserModel>();
  }

  ngOnInit(): void {
    this.search();
    this.userService.onRefresh.subscribe(() => this.search());
  }

  search(){
    this.userService.search().subscribe(result => {
      this.users = result;
    });
  }

  createUser(){
    this.userComponent.load(0);
  }

  selectEdit(event : UserModel){
    this.userComponent.load(event.Id);
  }

  selectDelete(event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Está seguro de que desea eliminar este elemento?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        this.userService.delete(event.Id).subscribe({
          next: () => {
            this.search()
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
            },
            error: err => {console.log(err)}
          });
      },
    });
  }

  getRole(role: RoleModel) {
    switch (role) {
      case RoleModel.Administrador:
        return "Administrator";
      case RoleModel.Contador:
        return "Contador";
      case RoleModel.Empleado:
        return "Empleado";
    }
  }
}
