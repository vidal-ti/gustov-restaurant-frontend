import { Component, OnInit } from '@angular/core';
import { DishService, UpdateImageService } from '../../dishes/shared/dish.service';
import { DishModel, UpdateImageModel } from '../../dishes/shared/dish.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit{
  images: Array<UpdateImageModel>;
  dishs: Array<DishModel>;
  rating: number = 4;
  menu: Array<string>;

  constructor(private updateImageService : UpdateImageService, private dishService : DishService) {
    this.images = new Array<UpdateImageModel>();
    this.dishs = new Array<DishModel>();
    this.menu = new Array<string>();
    this.menu.push( "Charque", "Pique" , "Pailita" , "Picante de Pollo");
  }

  ngOnInit(): void {
    this.uploadFile();
  }

  getDish(){
    this.dishService.search().subscribe({
      next: result=> {
        this.dishs =  result;
        this.dishs.forEach(item =>{
          const exists = this.images.some(img => img.Dish.Name === item.Name);
          if (!exists) 
            this.images.push({Dish: item, Image: `assets/images/${item.Name.replace(/\s+/g, '-')}.jpg`} as UpdateImageModel);
        });
      }
    })
  }

  uploadFile(): void {
    this.updateImageService.getOwnerId().subscribe({
      next: resp => {
        this.images = resp;
        if (this.images.length > 0) {
          const foundDishes = this.images.filter(dish => 
            this.menu.includes(dish.Dish.Name)
          );
          if (foundDishes.length == 3) {
            return ;
          } else{
            this.getDish();
          }
          
        }else{
          this.getDish();
        }
      }
    });
  }

  compareStrings(a: string, b: string): boolean {
    return a.localeCompare(b, 'es', { sensitivity: 'base' }) === 0;
  }
}
