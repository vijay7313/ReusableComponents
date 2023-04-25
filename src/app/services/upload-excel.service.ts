import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadExcelService {

  constructor(private http: HttpClient) { }
  
  uploadExcel(formData:any): Observable<any> {
    return this.http.post(environment.apiurl + `/documentController/upload`, formData);
  }
}
