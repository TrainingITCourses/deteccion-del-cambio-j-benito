import { Component,
         OnInit,
         Output,
         EventEmitter,
         ChangeDetectionStrategy } from '@angular/core';
import { Criterion, CriterionType } from 'app/models';

class CriterionName {
  type: CriterionType;
  name: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-criterion-types',
  templateUrl: './criterion-types.component.html',
  styleUrls: ['./criterion-types.component.scss']
})
export class CriterionTypesComponent implements OnInit {
  @Output() public criterionTypeChange = new EventEmitter<CriterionType>();

  public criteria: CriterionName[];
  public criterionTypeSelected: string;

  constructor() { }

  ngOnInit() {
    this.criteria = this.initCriteria();
  }

  private initCriteria(): CriterionName[] {
    return [
      {
        type: 'status',
        name: 'Estado'
      },
      {
        type: 'agencies',
        name: 'Agencia'
      },
      {
        type: 'types',
        name: 'Tipo'
      }
    ];
  }

}
