import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  baseUrl:string='https://ecommerce.routemisr.com'

  constructor(private _httpClient:HttpClient) {}
   getAllProducts():Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/products')
   }
   getProductById(id:string):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}/api/v1/products/${id}`)
   }
   getCategories():Observable<any>{
    return this._httpClient.get(`${this.baseUrl}/api/v1/categories`)
   }
   getCategoryDetails(id:string|null):Observable<any>{
    return this._httpClient.get(this.baseUrl+`categories/${id}`)
   }
}
