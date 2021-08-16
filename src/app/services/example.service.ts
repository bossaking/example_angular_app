import { GlobalVariables } from './../shared/globals';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {


  constructor(private http: HttpClient) { }

  getWather(){
    return this.http.get(GlobalVariables.apiURL + 'WeatherForecast')
      .pipe(map((result: any) => {
        return result;
      }), catchError((err) => {
          console.log(err);
          return throwError(err);
      }));
  }
}
