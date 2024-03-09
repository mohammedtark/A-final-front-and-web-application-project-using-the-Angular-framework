import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatrgoriesService {

  constructor(private _httpClient:HttpClient) { }
  getAllcatrgories():Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
}
