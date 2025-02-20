import { Component, OnInit, ViewChild } from '@angular/core';
import { DishComponent } from '../dish/dish.component';
import { DishModel, UpdateImageModel } from '../shared/dish.model';
import { DishService, UpdateImageService } from '../shared/dish.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit{

  @ViewChild(DishComponent) dishComponent : DishComponent;
  users: Array<DishModel>;
  constructor(
    private userService : DishService, 
    private messageService: MessageService,    
    
    private confirmationService: ConfirmationService, 
  ) {
    this.users = new Array<DishModel>();
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
    this.dishComponent.load(0);
  }

  selectEdit(event: DishModel){
    this.dishComponent.load(event.Id);
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
      reject: () => {
      }
  });
  }
}
