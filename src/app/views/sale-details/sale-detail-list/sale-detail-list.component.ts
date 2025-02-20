import { Component, OnInit, ViewChild } from '@angular/core';
import { SaleDetailComponent } from '../sale-detail/sale-detail.component';
import { SaleDetailModel } from '../shared/sale-detail.model';
import { SaleDetailService } from '../shared/sale-detail.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-sale-detail-list',
  templateUrl: './sale-detail-list.component.html',
  styleUrls: ['./sale-detail-list.component.scss']
})
export class SaleDetailListComponent implements OnInit{

  @ViewChild(SaleDetailComponent) dishComponent : SaleDetailComponent;
  users: Array<SaleDetailModel>;
  constructor(
    private userService : SaleDetailService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService, 
  ) {
    this.users = new Array<SaleDetailModel>();
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

  selectEdit(event: SaleDetailModel){
    this.dishComponent.load(event.Id);
  }

  selectDelete(event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this item?',
      header: 'Confirmation',
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
