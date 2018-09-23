import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  public getAgencies () {
    return 'hola';
  }
  // public getAgencies = (): Observable<any[]> =>
  // this.http
  //   .get(environment.url + '/assets/launchagencies.json')
  //   .pipe(map((res: any) => res.agencies))

  // public getMissionTypes = (): Observable<any[]> =>
  //   this.http
  //     .get(environment.url + '/assets/launchmissions.json')
  //     .pipe(map((res: any) => res.types));

  // public getStatusTypes$ = (): Observable<any[]> =>
  //   this.http.get(environment.url + '/assets/launchstatus.json').pipe(
  //     map((res: any) => res.types),
  //     map((res: any[]) => res.map(this.setStatusColor)),
  //     tap((res: any[]) => (this.statuses = res))
  //   );
}
