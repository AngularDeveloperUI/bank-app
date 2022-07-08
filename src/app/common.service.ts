import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUserData(): Observable<any> {
    return this.httpClient.get('http://jsonblob.com/api/995053639601242112');
  }
}
