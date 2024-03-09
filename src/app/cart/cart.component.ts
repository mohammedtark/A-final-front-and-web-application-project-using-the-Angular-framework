import { Cart } from './../interfaces/cart';
import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private _cartService:CartService){
}
ngOnInit(){
  this.getCart()
}

cart!:Cart
getCart(){
  this._cartService.getCart().subscribe({
    next:(res)=>{
      console.log(res);
      this.cart=res
    },
    error:(err)=>{
      console.log(err);

    }
  })
}

updataCart(id: string, count: number) {
  if (count>0) {
    this._cartService.UpdataCartProductQuantity(id, count).subscribe({
      next: (res) => {
        console.log(res);
        this.cart = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  else{
    this.removeItem(id)
  }
}

removeItem(id:string){
  this._cartService.removeItem(id).subscribe({
    next: (res) => {
      console.log(res);
      this.cart=res
    },
    error: (err) => {
      console.log(err);
    }
  })
}
}
