import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private hc: HttpClient,
  ) { }

  getUserData(): Observable<any> {
    return this.hc.get('http://jsonblob.com/api/994296099481337856');
  }
}
