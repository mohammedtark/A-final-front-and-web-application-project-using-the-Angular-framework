import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`
  whishList:BehaviorSubject<number>=new BehaviorSubject(0)
  constructor(private _httpClient:HttpClient) {
    this.getWhishList().subscribe({
      next:(res)=>{
        this.whishList.next(res.numOfCartItems)

      }
    })
  }



  addToWhishList(prodId:string):Observable<any>{
    return this._httpClient.post(this.baseUrl + `wishlist`,
    {
      productId: prodId
  }
    )
  }
  getWhishList():Observable<any>{
    return this._httpClient.get(this.baseUrl + `wishlist`)

  }
  removeWhishList(prodId:string|undefined):Observable<any>{
    return this._httpClient.delete(this.baseUrl + `wishlist/${prodId}`)

  }
  cartItems:BehaviorSubject<number>=new BehaviorSubject(0)
  basUrl:string= 'https://ecommerce.routemisr.com'
}
