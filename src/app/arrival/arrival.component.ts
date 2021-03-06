import { Component, OnInit } from '@angular/core';
import { Colonists, IOccupation    } from './../shared/models';
import { Colonistservice }  from './../shared/services/colonist-services';
import { Occupationservice } from './../shared/services/occupation-services';
import { Router } from '@angular/router';

@Component  ({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css'],
})

export class ArrivalComponent {

NO_OCCUPATION_SELECTED = '(none)';

private errorMessage: string;
public occupation: IOccupation [];
public colonist: Colonists;


constructor(
  private router: Router,
  private colonistService: Colonistservice,
  private occupationservice: Occupationservice
){
  this.colonist = new Colonists('', this.NO_OCCUPATION_SELECTED,'');
  occupationservice.getOccupation().then(jobs =>this.occupation = jobs);
}

  get noOccupation() {
     return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
   }

   onSubmit() {
   this.colonistService.newColonists(this.colonist)
   .then(colonist => {
     sessionStorage.setItem('colonist', colonist.job_id);
     this.router.navigate(['/encounters']);
   }).catch(error =>{
     this.errorMessage="Oops, something went wrong! ";
   });
 }
}

/* updateColonist(){
  console.log('updating colonist');
  this.colonist = new Colonists(",", this.NO_OCCUPATION_SELECTED);
} */
