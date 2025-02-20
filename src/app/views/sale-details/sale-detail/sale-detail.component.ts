import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SaleDetailModel } from '../shared/sale-detail.model';
import { SaleDetailService } from '../shared/sale-detail.service';
import { MessageService } from 'primeng/api';
import { SaleService } from '../../sales/shared/sale.service';
import { DishService } from '../../dishes/shared/dish.service';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss']
})
export class SaleDetailComponent implements OnInit{
  @ViewChild('userForm', {static : true}) userForm : NgForm;
  visible: boolean = false;
  entity : SaleDetailModel;
  dishData: any[] | undefined = [];
  saleData: any[] | undefined = [];
  isBtnSave: boolean;
  constructor(
    private saleDetailService : SaleDetailService, 
    private saleService : SaleService, 
    private dishService : DishService, 
    private messageService: MessageService,
  ) {
    this.entity = new SaleDetailModel();   
  }
  ngOnInit(): void {
    this.userForm.valueChanges.subscribe( () => this.isBtnSave = this.userForm.invalid)
    this.getAllSale();
    this.getAllDish();
  }

  load(entityId : number){
    this.userForm.reset();
    if (entityId === 0) {
      this.entity = new SaleDetailModel();
      this.visible = true;
    } else {
      this.saleDetailService.get(entityId).subscribe({
        next: result => {
          this.entity = result;
          this.visible = true;
        }, error : err =>{}
      });
    }
  }

  btnSave(){
    this.saleDetailService.save(this.entity).subscribe({
      next : result => {
        this.entity = result;
        this.saleDetailService.onRefresh.next(true);
      },
      error: err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Saved Error' });
        
      }
    });
  }

  getAllSale(){
    this.saleService.search().subscribe({
      next: result => {
        result.forEach((user: any) => {
          this.saleData.push({ name: user.AppUser.Name, value: user });
        }); 
      }, error : err =>{}
    });
  }

  getAllDish(){
    this.dishService.search().subscribe({
      next: result => {
        result.forEach((user: any) => {
          this.dishData.push({ name: user.Name, value: user });
        }); 
      }, error : err =>{}
    });
  }
}
