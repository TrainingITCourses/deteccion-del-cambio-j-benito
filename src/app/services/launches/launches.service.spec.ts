import { TestBed, inject } from '@angular/core/testing';

import { LaunchesService } from './launches.service';
import { HttpClientModule } from '@angular/common/http';

describe('LaunchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        LaunchesService
      ]
    });
  });

  it('should be created', inject([LaunchesService], (service: LaunchesService) => {
    expect(service).toBeTruthy();
  }));
});
