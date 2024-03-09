
import { CommonModule } from '@angular/common';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WhishlistService } from 'src/app/services/whishlist.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-products',
  standalone:true,
  imports:[CommonModule,RouterLink,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private _productsDataService:ProductsDataService,private _cartService:CartService,private toastr: ToastrService,private _WhishlistService:WhishlistService){}
  Products:Product[]=[];
  whishListData:string[]=[]
ngOnInit(): void {
  this._productsDataService.getAllProducts().subscribe({
    next:(res)=>{
      console.log(res);
      this.Products=res.data;
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
addProduct(productId:string){
  this._cartService.addToCart(productId).subscribe({
    next:(res)=>{
      console.log(res);
      this._cartService.cartItems.next(res.numOfCartItems)
      // this.cartItems.next(res.numOfCartItems)
      this.toastr.success(res.message,'', {
        timeOut: 3000,
        progressBar:true,
        positionClass:'toast-bottom-right'
      });
    },
    error:(err)=>{
      console.log(err);

    }
  })
  }


  addFav(prodId:string):void{
    this._WhishlistService.addToWhishList(prodId).subscribe({
      next:(response)=>{
        console.log(response);
        this.toastr.success(response.message)
        this.whishListData=response.data
      }
    })
    }
    addToCart(productId:string){
    this._cartService.addToCart(productId).subscribe({
      next:(res)=>{
        console.log(res);
        this._cartService.cartItems.next(res.numOfCartItems)
        // this.cartItems.next(res.numOfCartItems)
        this.toastr.success(res.message,'', {
          timeOut: 3000,
          progressBar:true,
          positionClass:'toast-bottom-right'
        });
      },
      error:(err)=>{
        console.log(err);

      }
    })
    }
    searchTerm:string=''
    removeFav(prodId:string|undefined):void{
      this._WhishlistService.removeWhishList(prodId).subscribe({
        next:(res)=>{
          console.log(res);
          this.toastr.success(res.message)
          this.whishListData=res.data
        }
      })
    }

}
