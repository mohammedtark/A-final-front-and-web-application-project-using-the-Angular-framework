import { CartService } from './../../services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  isLoading:boolean=false
  id:string=''
constructor(private _activatedRoute:ActivatedRoute,private _productsDataService:ProductsDataService,private _cartService:CartService,private toastr:ToastrService){}
ngOnInit(){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    console.log(res.get('id'));
    this.id=res.get('id')
  })
  this.getProduct()
}



Product:Product= {} as Product
getProduct(){
  this.isLoading=true
  this._productsDataService.getProductById(this.id).subscribe({
    next:(res)=>{
      console.log(res.data);
      this.Product= res.data
      this.isLoading= false

    },
    error:(err)=>{
      console.log(err);
      this.isLoading= false
    }
  })
}

customOptions: OwlOptions = {
  autoplay:true,
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
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
