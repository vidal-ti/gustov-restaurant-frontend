import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";
import { Observable, tap } from "rxjs";
import { HttpServiceBase } from "./HttpServiceBase";

export abstract class HttpSaveService extends HttpServiceBase{
  
    public message: MessageService;
    constructor(http: HttpClient, messageService: MessageService) {
        super(http, messageService);
        this.message = messageService;
    }

    save(model: any): Observable<any> {
        return this.httpPost(model, this.formatUrl('save')).pipe(
           tap(
            res=> {
                this.message.add({severity:'success', summary:'Success', detail: `Guardado ${new Date().toDateString()}`});
                return res;
            }
           ) 
        );
    }

    get(id: number): Observable<any> {
        return this.httpGet(id, this.formatUrl('get'));
    }

    delete(id: number): Observable<any> {
        return this.httpDelete(id, this.formatUrl('delete'));
    }

    search(){
        return this.httpSearch(this.formatUrl('search'));
    }
}