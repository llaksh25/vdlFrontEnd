import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Rx' ;
// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, filter, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private  _http: HttpClient) {

  }

  postRequest(data) {
    // alert('');
    console.log(data);
    return this._http.post('http://127.0.0.1:8000/crud/hello', data).pipe(Response => Response);
  }

   getResponse() {
     // alert('');
     return this._http.get('http://127.0.0.1:8000/crud/getResponse').pipe(Response => Response);
   }

}
