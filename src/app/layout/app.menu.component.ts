import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Restaurante Gustov',
                items: [
                    { label: 'Menu', icon: 'pi pi-fw pi-users', routerLink: ['/'] },
                    { label: 'Usuario', icon: 'pi pi-fw pi-users', routerLink: ['/user'] },
                    { label: 'Platos', icon: 'pi pi-fw pi-book', routerLink: ['/dish'] },
                    { label: 'Ventas', icon: 'pi pi-fw pi-cart-plus', routerLink: ['/sale'] },
                    { label: 'Detalle de ventas', icon: 'pi pi-fw pi-list', routerLink: ['/saledetail'] },
                    { label: 'Reporte de venta diario', icon: 'pi pi-fw pi-file', routerLink: ['/report-sale'] },
                ]
            },
        ];
    }
}
