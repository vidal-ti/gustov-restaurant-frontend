import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuListComponent } from '../menu-list/menu-list.component';

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: MenuListComponent }
  ])],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
