import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ) { }

  getCountryList() {
    //  return this.http.get<Country[]>(this.COVID_API_ULR)
  }
}
