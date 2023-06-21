import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs';

@Injectable()
export class Api{
    server: string = 'http://localhost/apisistest/';

    constructor(private http : HttpClient){
       
    }

     dadosApi(dados: any, api: string){
            const httpOptions = {
                headers: new HttpHeaders({'Content-Type' : 'application/json'})
                }

            let url = this.server + api;
            return this.http.post(url, JSON.stringify(dados), httpOptions).pipe(map(res => res));
        }
}
