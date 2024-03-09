import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  signUp(userData:Object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData)
  }

  signIn(userData:Object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userData)
  }

  getToken(){
    const encode= localStorage.getItem('_token')
    if (encode) {
      const decodede=jwtDecode(encode)
      console.log(decodede);

    }
  }

  forgetpassword(email:Object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,email)
  }
  verifyCode(resetCode:Object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,resetCode)
  }
  resetPassword(userData:Object):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,userData)
  }
}
