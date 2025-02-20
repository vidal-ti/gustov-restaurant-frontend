import { Component, OnInit, ViewChild } from '@angular/core';
import { SaleComponent } from '../sale/sale.component';
import { SaleModel, StatusModel } from '../shared/sale.model';
import { SaleService } from '../shared/sale.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit{

  @ViewChild(SaleComponent) dishComponent : SaleComponent;
  users: Array<SaleModel>;
  constructor(
    private userService : SaleService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService, 
  ) {
    this.users = new Array<SaleModel>();
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

  selectEdit(event : SaleModel){
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
        this.userService.delete(event.AppUserId).subscribe({
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

  getStatus(role: StatusModel) {
    switch (role) {
      case StatusModel.Paid:
        return "Pagado";
      case StatusModel.Cancelled:
        return "Cancelado";
    }
  }
}