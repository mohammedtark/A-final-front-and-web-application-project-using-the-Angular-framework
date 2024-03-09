import { Category } from './../../interfaces/product';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent {
  constructor(private _productsDataService:ProductsDataService){}

  ngOnInit(){
    this.getAllCategories()
  }
  allCategories:Category[]=[]

  getAllCategories(){
    this._productsDataService.getCategories().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.allCategories=res.data
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
  customOptions: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 10
      }
    },
    nav: true
  }
}
