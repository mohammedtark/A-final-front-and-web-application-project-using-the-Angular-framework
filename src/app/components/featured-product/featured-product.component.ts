import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ToastrService } from 'ngx-toastr';
import { WhishlistService } from 'src/app/services/whishlist.service';
@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent {
  isLoadin:boolean=false
constructor(private _productsDataService:ProductsDataService,private _cartService:CartService,private toastr: ToastrService,private _WhishlistService:WhishlistService){}
allProducts:Product []=[]
whishListData:string[]=[]
ngOnInit():void{
  this.getProducts()
  this._WhishlistService.getWhishList().subscribe({
    next:(res)=>{
      // console.log('wishList',res.data);
      const newData = res.data.map((item:any)=>item._id)
      // console.log('newData',newData);
      this.whishListData=newData;

    }
  })
}
getProducts(){
  this.isLoadin= true
  this._productsDataService.getAllProducts().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.allProducts=res.data
      this.isLoadin=false
    },
    error:(err)=>{
      console.log(err);
      this.isLoadin=false
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
