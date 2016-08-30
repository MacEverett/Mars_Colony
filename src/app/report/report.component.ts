/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { IAliens, Encounters } from '../shared/models';
import { Alienservice } from '../shared/services/alien-services';
import { Encounterservice } from '../shared/services/encounter-services'
import { Router } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css']
})

export class ReportComponent {

  NO_ALIEN_SELECTED = '(none)';

  private errorMessage: string;
  public aliens: IAliens[];
  public encounter: Encounters;

  constructor(
    private router: Router,
    private encounterService: Encounterservice,
    private alienService: Alienservice
    )

  {
    this.errorMessage='';
    this.encounter = new Encounters(sessionStorage.getItem('colonists'), this.NO_ALIEN_SELECTED, '', '');
    alienService.getAliens().then(
      alienType => this.aliens=alienType);
  }

  onSubmit() {
    this.encounterService.addEncounters(
    {
      "encounter" : this.encounter
    })
    .then(encounters => {this.router.navigate(['/encounters']);
  }).catch(error => {
    this.errorMessage="Oops, something went wrong!";

  });


}
get noAlienSelected(){
    return this.encounter.atype===this.NO_ALIEN_SELECTED;
  }
}
