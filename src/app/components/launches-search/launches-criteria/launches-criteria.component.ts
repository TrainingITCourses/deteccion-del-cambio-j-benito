import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'app/services';

@Component({
  selector: 'app-launches-criteria',
  templateUrl: './launches-criteria.component.html',
  styleUrls: ['./launches-criteria.component.scss']
})
export class LaunchesCriteriaComponent implements OnInit {

  constructor(private asdf: LaunchesService) { }

  ngOnInit() {
    console.log('results: ');
    this.asdf.getAgencies();
  }

}
