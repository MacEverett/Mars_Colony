//Job services
import { Injectable } from '@angular/core';
import { IOccupation   } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Occupationservice {
    occupationUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs ';
    constructor(private http: Http){}
    getOccupation  (): Promise<IOccupation  []> {
        return this.http.get(this.occupationUrl)
                        .toPromise()
                        .then(response => response.json().jobs)
                        .catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
