import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter,
         ChangeDetectionStrategy } from '@angular/core';
import { CriterionType, IdValueType } from 'app/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-criterion-results',
  templateUrl: './criterion-results.component.html',
  styleUrls: ['./criterion-results.component.scss']
})
export class CriterionResultsComponent implements OnInit {
  @Input() public criterionResults: IdValueType[];
  @Output() public criterionResultChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
