import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient) { }
  getAllUsers()
  {
    return this.http.get(environment.apiurl+`/documentController/dowloadDocument`) as Observable<UserDetails[]>
  }
}
