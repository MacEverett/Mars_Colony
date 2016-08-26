//Alien services
import { Injectable } from '@angular/core';
import { IAliens } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Alienservice {
    aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    constructor(private http: Http){}
    getAliens(): Promise<IAliens[]> {
        return this.http.get(this.aliensUrl)
                        .toPromise()
                        .then(response => response.json().aliens)
                        .catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
