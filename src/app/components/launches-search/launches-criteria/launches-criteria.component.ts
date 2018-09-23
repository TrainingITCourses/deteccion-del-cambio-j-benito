import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'app/services';
import { CriterionType, IdValueType } from 'app/models';

@Component({
  selector: 'app-launches-criteria',
  templateUrl: './launches-criteria.component.html',
  styleUrls: ['./launches-criteria.component.scss']
})
export class LaunchesCriteriaComponent implements OnInit {
  private criterionType: CriterionType;
  public criterionResults: IdValueType[];

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
  }

  onCriterionTypeChange(criterionType: CriterionType) {
    this.criterionType = criterionType;
    switch (criterionType) {
      case 'agencies':
        this.launchesService.getAgencies().subscribe((agencies) => {
          this.assignCriterionResults(agencies);
        });
        break;
      case 'types':
        this.launchesService.getMissionTypes().subscribe((missionTypes) => {
          this.assignCriterionResults(missionTypes);
        });
        break;
      case 'status':
        this.launchesService.getStatusTypes().subscribe((statusTypes) => {
          this.assignCriterionResults(statusTypes);
        });
        break;
      default:
        throw new Error('criterionType is not supported :S');
    }
  }

  private assignCriterionResults(results: any[]): void {
    const criterionResults = [];
    results.forEach((elem) => {
      criterionResults.push({
        id: elem.id,
        value: elem.name
      });
    });
    this.criterionResults = criterionResults; // Ref. changed
  }

  onCriterionResultChange(criterionResultId: number) {
    console.log('resultCANGE', criterionResultId);
  }

}
