import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {Customer} from './customer';

@Injectable()
export class CustomerFromService {

    http:Http;
    headers:Headers;
    url:string = 'http://localhost:5000/api/customer';

    constructor(http:Http) {
		this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type','application/json');
     }

    getAllCustomer():Observable<Customer[]>{
         return this.http.get(this.url)
                    .map(response => response.json());
    }
}