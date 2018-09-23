import { Component, OnInit, Input } from '@angular/core';
import { CriterionType, Criterion } from 'app/models';
import { LaunchesService } from 'app/services';

@Component({
  selector: 'app-launches-search',
  templateUrl: './launches-search.component.html',
  styleUrls: ['./launches-search.component.scss']
})
export class LaunchesSearchComponent implements OnInit {
  private launches: any[];
  public filteredLaunches: any[] = [];

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getLaunches().subscribe((launches) => {
      this.launches = launches;
    });
  }

  onLaunchCriterionChange(criterion: Criterion) {
    console.log('criterion', criterion);
    if (criterion.type === 'status') {
      this.filteredLaunches = this.launches.filter(
        launch => launch.status === criterion.id
      );
    } else if (criterion.type === 'types') {
      this.filteredLaunches = this.launches.filter(
        launch => launch.missions.some(mission => mission.type === criterion.id)
      );
    }
    console.log('filtered', this.filteredLaunches)
  }
}
