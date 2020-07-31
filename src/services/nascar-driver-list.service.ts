import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class NascarDriverListService {
  
  API_KEY: string = '59mtyrrfcnh9qzkscbegy7hn';  
  
  constructor(private http: HttpClient) { }
  
  public getNascarDriverList(): Observable<any> {
    // const headers = new Headers({ 'Content-Type': 'application/json'});
    // return this.http.get('api/nascar-ot3/sc/2020/drivers/list.json?api_key='+this.API_KEY);    
    return this.http.get('/api/nascar-ot3/sc/2019/drivers/list.json?api_key='+this.API_KEY);
  }
}
