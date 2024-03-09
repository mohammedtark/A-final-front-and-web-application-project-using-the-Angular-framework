import { Category } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {
  isLoading:boolean=false
constructor(private _activatedRoute:ActivatedRoute,private _productsDataService: ProductsDataService){}
categoryId:string|null='';
CategoriesDetails:Category={}as Category;
ngOnInit(): void {
  this.isLoading= true
    this._activatedRoute.paramMap.subscribe({

      next:(params)=>{
       this.categoryId= params.get('id')

      },
      error:(err)=>{
        console.log(err);

      }
    })
    this._productsDataService.getCategoryDetails(this.categoryId).subscribe({
      next:(res)=>{
        console.log(res);
        this.CategoriesDetails=res.data
        this.isLoading= false
      },
      error:(err)=>{
        console.log(err);
        this.isLoading= false
      }
    })

}

}
