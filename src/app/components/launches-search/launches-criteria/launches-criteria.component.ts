import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'app/services';
import { CriterionType } from 'app/models';

class SelectValue {
  id: number;
  value: string;
}

@Component({
  selector: 'app-launches-criteria',
  templateUrl: './launches-criteria.component.html',
  styleUrls: ['./launches-criteria.component.scss']
})
export class LaunchesCriteriaComponent implements OnInit {

  public criterionResults: SelectValue[];

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
  }

  onCriterionChange(criterionType: CriterionType) {
    // TODO: Continue
    console.log('lol', criterionType);
    switch(criterionType) {
      case 'agencies':
        this.launchesService.getAgencies().subscribe((agencies) => {
          console.log('agencies', agencies);
        })
        break;
      case 'types':
        break;
      case 'status':
        break;
      default:
        throw new Error('criterionType is not supported :S')
  }
  }
}
