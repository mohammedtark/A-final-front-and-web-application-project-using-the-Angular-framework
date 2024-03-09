import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:BehaviorSubject<number>=new BehaviorSubject(0)

  basUrl:string= 'https://ecommerce.routemisr.com'
  constructor(private _httpClient:HttpClient) {
    this.getCart().subscribe({
      next:(res)=>{
        this.cartItems.next(res.numOfCartItems)

      },
      error:(err)=>{
        console.log(err);

      }
    })
   }

  addToCart(id:string):Observable<any>{
    return this._httpClient.post(`${this.basUrl}/api/v1/cart`,{
      productId:id
    },
    {
    headers:{
      token:`${localStorage.getItem('_token')}`
    }
  }
    )
  }

  getCart():Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart',{
      headers:{
        token:`${localStorage.getItem('_token')}`
      }
    })
  }

  UpdataCartProductQuantity(id:string,count:number):Observable<any>{
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      count:`${count}`
    },{
      headers:{
        token:`${localStorage.getItem('_token')}`
      }
    })
  }

  removeItem(id:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      headers:{
        token:`${localStorage.getItem('_token')}`
      }
    })
  }

  checkout(id:string,shippingData:Object):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
      shippingAddress:shippingData
    },
    {
      headers:{
        token : `${localStorage.getItem('_token')}`
      }
    }
    )
  }
}
