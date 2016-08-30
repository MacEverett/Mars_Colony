//Encounter services
import { Injectable } from '@angular/core';
import { Encounters } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Encounterservice {
    encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    constructor(private http: Http){}
    getEncounters(): Promise<Encounters[]> {
        return this.http.get(this.encountersUrl)
                        .toPromise()
                        .then(response => response.json().encounters)
                        .catch(this.handleError);
    }

    addEncounters(encounter): Promise<Encounters[]>{
  let body = JSON.stringify(encounter);
  let headers = new Headers({'Content-Type': 'application/json'})

  return this.http.post(this.encountersUrl, body, {headers})
  .toPromise().then(response => response.json().encounters)
  .catch(this.handleError);
}

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
