import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DishListComponent } from '../dish-list/dish-list.component';

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: DishListComponent }
  ])],
  exports: [RouterModule]
})
export class DishRoutingModule { }
