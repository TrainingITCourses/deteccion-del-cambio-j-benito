import { Component,
         OnInit,
         Output,
         EventEmitter,
         ChangeDetectionStrategy } from '@angular/core';
import { Criterion, CriterionType } from 'app/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-criterion-types',
  templateUrl: './criterion-types.component.html',
  styleUrls: ['./criterion-types.component.scss']
})
export class CriterionTypesComponent implements OnInit {
  @Output() public criterionTypeChange = new EventEmitter<CriterionType>();

  public criteria: Criterion[];
  public criterionTypeSelected: string;

  constructor() { }

  ngOnInit() {
    this.criteria = this.initCriteria();
  }

  private initCriteria(): Criterion[] {
    return [
      {
        type: 'status',
        value: 'Estado'
      },
      {
        type: 'agencies',
        value: 'Agencia'
      },
      {
        type: 'types',
        value: 'Tipo'
      }
    ];
  }

}
