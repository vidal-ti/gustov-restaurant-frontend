import { HttpClient, HttpParams } from "@angular/common/http";
import { MessageService } from "primeng/api";
import { catchError, Observable, tap, throwError } from "rxjs";
import * as data from '../../assets/Config/config.json';
export abstract class HttpServiceBase {
    genericError = "";
    urlFormat: any;
    urlPrimary: string;
    urlSecondary: string;
    constructor(private http: HttpClient, private messageService: MessageService) {
        this.genericError = `Some Error occcured, Please contact Administrator for the Errors`;
        this.getConfiguration(6)
    }  

    getConfiguration(key) {
        let model = data;
        let kk = model['httpServiceConfig']['serviceHost'];

        this.urlFormat = kk;
    }

    setRoutePrefix(name){
        this.urlPrimary = this.urlFormat+'/'+name;
    }

    formatUrl(name){
       return this.urlSecondary = this.urlPrimary+'/'+name;
    }

    httpPost(object: any, url: string): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        let body = JSON.stringify(object);
        return this.http.post(url, body, {'headers':headers}).pipe(
            tap(res => { 
                return res; 
            }), 
            catchError(err => { 
                this.messageService.add({severity:'error', summary: err['name'].Message, detail: err['error'].MessageDetail})
                return throwError(err);
            }));
    }

    httpGet(id: number, url: string): Observable<any>{
        const headers = { 'content-type': 'application/json'}

        return this.http.get(url+'/'+id, {'headers': headers}).pipe(
            tap(res => { 
                return res; 
            }), 
            catchError(err => { 
                this.messageService.add({severity:'error', summary: err['name'].Message, detail: err['error'].MessageDetail})
                return throwError(err);
            }));
    }

    httpGetOnly(url: string): Observable<any>{
        const headers = { 'content-type': 'application/json'}

        return this.http.get(url, {'headers': headers}).pipe(
            tap(res => { 
                return res; 
            }), 
            catchError(err => { 
                this.messageService.add({severity:'error', summary: err['name'].Message, detail: err['error'].MessageDetail})
                return throwError(err);
            }));
    }

    httpDelete(id: number, url: string): Observable<any>{
        const headers = { 'content-type': 'application/json'}

        return this.http.delete(url+'/'+id, {'headers': headers}).pipe(
            tap(res => { 
                return res; 
            }), 
            catchError(err => { 
                this.messageService.add({severity:'error', summary: err['name'].Message, detail: err['error'].MessageDetail})
                return throwError(err);
            }));
    }

    httpSearch(url: string): Observable<any> {
        const headers = { 'content-type': 'application/json'}

        return this.http.get(url, {'headers':headers}).pipe(
            tap(res => { 
                return res; 
            }), 
            catchError(err => { 
                this.messageService.add({severity:'error', summary: err['name'].Message, detail: err['error'].MessageDetail})
                return throwError(err);
            }));
    }
}