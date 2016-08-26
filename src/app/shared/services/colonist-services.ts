//Colonist services
import { Injectable } from '@angular/core';
import { Colonists } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Colonistservice {
    colonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    constructor(private http: Http){}
  //  getColonists(): Promise<Colonists[]> {

      //  newColonist(colonist)
      //  return this.http.get(this.colonistsUrl)
                        //.post(this.colonistUrl, body, { headers:headers })
                      //  .toPromise()
                      //  .then(response => response.json().colonists)
                                        //  .catch(this.handleError);
    newColonists(colonist: Colonists): Promise<Colonists> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let body = JSON.stringify({ colonist });

      return this.http
      .post(this.colonistsUrl, body, { headers: headers })
      .toPromise()
      .then(response => response.json().colonist)
      .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
