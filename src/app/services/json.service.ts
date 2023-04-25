import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { UserDetails } from '../models/UserDetails'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {}

  getDataFromJson() {
    return this.http.get<UserDetails[]>(`${environment.jsonurl}/users`)
  }
}
