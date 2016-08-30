
import { Component, OnInit } from '@angular/core';
import { Encounters } from '../shared/models';
import { Encounterservice } from '../shared/services/encounter-services';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css']
})
export class EncountersComponent {

    public encounters: Encounters[];

  constructor(
    private encounterService: Encounterservice) {
     encounterService.getEncounters().then(
       encounterReports=>this.encounters=encounterReports);
  }
}
