import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from 'src/app/interfaces/catrgories';  // Assuming a typo fix in the import path
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  selectedcategories: Category | null = null;
  categoryData: Category[] = [];

  constructor(private _productsDataService: ProductsDataService) {}

  ngOnInit(): void {
    this._productsDataService.getCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.categoryData = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  opencategories(categories: Category): void {
    this.selectedcategories = categories;
  }
}
