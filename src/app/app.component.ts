import { Component } from '@angular/core';
import { Alienservice } from './shared/services/alien-services';
import { Colonistservice } from './shared/services/colonist-services';
import { Encounterservice } from './shared/services/encounter-services';
import { Occupationservice } from './shared/services/occupation-services';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [Alienservice, Colonistservice, Encounterservice , Occupationservice],

})
export class AppComponent {

  constructor(alienservices: Alienservice,
    colonistservices: Colonistservice,
    encounterservice: Encounterservice,
    occupationservice: Occupationservice )
   {
    console.log(alienservices);
    console.log(colonistservices);
    console.log(encounterservice);
    console.log(occupationservice);
   }
};
