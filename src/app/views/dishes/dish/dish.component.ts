import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DishModel, UpdateImageModel } from '../shared/dish.model';
import { DishService, UpdateImageService } from '../shared/dish.service';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit{
  @ViewChild('userForm', {static : true}) userForm : NgForm;
  visible: boolean = false;
  entity : DishModel;
  updateImage : UpdateImageModel;
  cities: any[] | undefined;
  isBtnSave: boolean;
  selectedFile!: File;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private userService : DishService, 
    private updateImageService : UpdateImageService, 
    private messageService: MessageService,
  ) {
    this.entity = new DishModel();  
    this.updateImage = new UpdateImageModel()
    this.cities = [
      { name: 'Admin', value: 0 },
      { name: 'Secretari', value: 1 },
      { name: 'Employee', value: 2 },
  ];  
  }
  ngOnInit(): void {
    this.userForm.valueChanges.subscribe( () => this.isBtnSave = this.userForm.invalid)
  }

  load(entityId : number){
    this.userForm.reset();
    if (entityId === 0) {
      this.entity = new DishModel();
      this.visible = true;
    } else {
      this.userService.get(entityId).subscribe({
        next: result => {
          this.entity = result;
          this.visible = true;
        }, error : err =>{}
      });
    }
  }

  btnSave(){
    this.userService.save(this.entity).subscribe({
      next : result => {
        this.entity = result;
        this.updateImage.Dish = this.entity;
        this.updateImageService.saveImage(this.updateImage).subscribe({
          next: resp => {
            this.userService.onRefresh.next(true);
          }
        });
      },
      error: err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Saved Error' });
      }
    });
  }


  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.updateImage.Image = reader.result.toString();        
      };
      reader.readAsDataURL(file);
    }
  }
}
