import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { HttpSaveService } from 'src/app/core/httpSaveService';

@Injectable()
export class SaleService extends HttpSaveService {
    public onRefresh = new Subject<any>(); 
    
    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService);
        this.setRoutePrefix('sale');
    }

    getDailyReport(): Observable<any> {
        return this.httpGetOnly(this.formatUrl('getdailyreport'));
    }
}