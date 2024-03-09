import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WhishlistService } from 'src/app/services/whishlist.service';

@Component({
  selector: 'app-navbar-black',
  templateUrl: './navbar-black.component.html',
  styleUrls: ['./navbar-black.component.css']
})
export class NavbarBlackComponent {

  constructor(private _router:Router,private _cartService:CartService,private _WhishlistService:WhishlistService){}
  signOut(){
    localStorage.removeItem("_token")
    this._router.navigate(['/login'])
  }
  numberOfitems:number=0
  ngOnInit(){
  this._cartService.cartItems.subscribe((res)=>{
    this.numberOfitems=res
  })
  }
  numOfCartItems:number=0
  ngOnite(){
 this._WhishlistService.whishList.subscribe((res)=>{
  this.numberOfitems=res
 })
  }
}
