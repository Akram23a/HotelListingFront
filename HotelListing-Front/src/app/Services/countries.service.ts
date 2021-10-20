import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://localhost:5001/api/Country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  
  getAll() {
    return this.http.get(baseUrl);
  }

}
