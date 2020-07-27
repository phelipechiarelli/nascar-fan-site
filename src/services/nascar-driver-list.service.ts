import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NascarDriverListService {

  constructor(private http: HttpClient) { }

  public getNascarDriverList(): Observable<any> {
    return this.http.get('https://api.sportradar.us/nascar-ot3/sc/2020/drivers/list.json?api_key=cgkktrbfbesahb3fnxq63uar');
  }
}
