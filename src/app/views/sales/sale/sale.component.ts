import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SaleService } from '../shared/sale.service';
import { MessageService } from 'primeng/api';
import { SaleModel } from '../shared/sale.model';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit{
  @ViewChild('saleForm', {static : true}) userForm : NgForm;
  visible: boolean = false;
  entity : SaleModel;
  cities: any[] | undefined = [];
  statusData: any[] | undefined = [];
  isBtnSave: boolean;
  constructor(
    private saleService : SaleService, 
    private userService : UserService, 
    private messageService: MessageService,
  ) {
    this.entity = new SaleModel();  
    this.statusData = [
      { name: 'Pagado', value: 0 },
      { name: 'Cancelado', value: 1 },
    ];  
  }
  ngOnInit(): void {
    this.userForm.valueChanges.subscribe( () => this.isBtnSave = this.userForm.invalid)
    this.getAllUser();
  }

  load(entityId : number){
    this.userForm.reset();
    if (entityId === 0) {
      this.entity = new SaleModel();
      this.visible = true;
    } else {
      this.saleService.get(entityId).subscribe({
        next: result => {
          this.entity = result;
          console.log(result);
          
          this.entity.CreatedAt = new Date(result.CreatedAt);
          this.visible = true;
        }, error : err =>{}
      });
    }
  }

  btnSave(){
    this.saleService.save(this.entity).subscribe({
      next : result => {
        this.entity = result;
        this.entity.CreatedAt = new Date(result.CreatedAt);
        this.saleService.onRefresh.next(true);
      },
      error: err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Saved Error' });
        
      }
    });
  }

  getAllUser(){
    this.userService.search().subscribe({
      next: result => {
        result.forEach((user: any) => {
          this.cities.push({ name: user.Name, value: user });
        }); 
      }, error : err =>{}
    });
  }
}
