import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { HttpSaveService } from 'src/app/core/httpSaveService';
import { UpdateImageModel } from './dish.model';

@Injectable()
export class DishService extends HttpSaveService {
    public onRefresh = new Subject<any>(); 

    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService);
        this.setRoutePrefix('dish');
    }
}

@Injectable()
export class UpdateImageService extends HttpSaveService {
    public onRefresh = new Subject<any>(); 

    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService);
        this.setRoutePrefix('updateimage');
    }

    saveImage(model : UpdateImageModel): Observable<any> {
        return this.httpPost( model,this.formatUrl('saveimage'));
    }

    getOwnerId(): Observable<any> {
        return this.httpGetOnly(this.formatUrl('getownerid'));
    }
}