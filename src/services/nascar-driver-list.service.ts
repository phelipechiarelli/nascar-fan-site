import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class NascarDriverListService {
  
  API_KEY: string = 'cgkktrbfbesahb3fnxq63uar';  
  
  constructor(private http: HttpClient) { }
  
  public getNascarDriverList(): Observable<any> {
    return this.http.get('https://api.sportradar.us/nascar-ot3/sc/2020/drivers/list.json?api_key='+this.API_KEY);    
  }
}
