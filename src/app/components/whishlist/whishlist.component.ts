import { Product } from 'src/app/interfaces/product';


import { Component, OnInit } from '@angular/core';
import { WhishlistService } from 'src/app/services/whishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-whishlist',

  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {
  constructor(private _whishlistService:WhishlistService,private _toastrService:ToastrService,private toastr: ToastrService,private _cartService:CartService){}
  Products:Product[]=[];
  whishListData:string[]=[]
  ngOnInit(): void {
    this._whishlistService.getWhishList().subscribe({
      next:(res)=>{
        // console.log('wishList',res.data);
        this.Products=res.data
        const newData = res.data.map((item:any)=>item._id)
        // console.log('newData',newData);
        this.whishListData=newData;

      }
    })
  }
  addFav(prodId:string):void{
    this._whishlistService.addToWhishList(prodId).subscribe({
      next:(response)=>{
        console.log(response);
        this.toastr.success(response.message)
        this.whishListData=response.data
      }
    })
    }

    removeFav(prodId:string|undefined):void{
      this._whishlistService.removeWhishList(prodId).subscribe({
        next:(res)=>{
          console.log(res);
          this.toastr.success(res.message)
          this.whishListData=res.data
          console.log('before',this.Products);

          const newProductData=this.Products.filter((item)=>this.whishListData.includes(item._id))
          this.Products=newProductData;

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
}
