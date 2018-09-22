import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as service from './services';
import * as component from './components';

@NgModule({
  declarations: [
    AppComponent,
    component.LaunchesSearchComponent,
    component.LaunchesCriteriaComponent,
    component.LaunchesCounterComponent,
    component.LaunchesListComponent,
    component.CriteriaTypeComponent,
    component.CriterionResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    service.LaunchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
