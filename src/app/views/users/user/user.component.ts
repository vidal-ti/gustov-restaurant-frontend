import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleModel, UserModel } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  @ViewChild('userForm', {static : true}) userForm : NgForm;
  visible: boolean = false;
  entity : UserModel;
  cities: any[] | undefined;
  isBtnSave: boolean;
  constructor(
    private userService : UserService, 
    private messageService: MessageService,
  ) {
    this.entity = new UserModel();  
    this.cities = [
      { name: 'Administrador', value: RoleModel.Administrador },
      { name: 'Contador', value: RoleModel.Contador },
      { name: 'Empleado', value: RoleModel.Empleado },
    ];  
  }

  ngOnInit(): void {
    this.userForm.valueChanges.subscribe(() => this.isBtnSave = this.userForm.invalid)
  }

  load(entityId : number){
    this.userForm.reset();
    if (entityId === 0) {
      this.entity = new UserModel();
      this.visible = true;
    } else {
      this.userService.get(entityId).subscribe({
        next: result => {
          this.entity = result;
          this.entity.Created = new Date(result.Created);
          this.visible = true;
        }, error : err =>{}
      });
    }
  }

  btnSave(){
    this.userService.save(this.entity).subscribe({
      next : result => {
        this.entity = result;
        this.entity.Created = new Date(result.Created);
        this.userService.onRefresh.next(true);
      },
      error: err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Saved Error' });
        
      }
    });
  }
}
