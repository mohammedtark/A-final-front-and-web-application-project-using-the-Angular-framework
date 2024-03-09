// brands.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brands } from 'src/app/interfaces/brands';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  BrandsDetails: Brands[] = [];
  selectedBrand: Brands | null = null;

  constructor(private _activatedRoute: ActivatedRoute, private _brandsService: BrandsService) {}

  ngOnInit(): void {
    this._brandsService.getAllBrands().subscribe({
      next: (res) => {
        console.log(res);
        this.BrandsDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  openModal(brand: Brands): void {
    this.selectedBrand = brand;
  }

  closeModal(): void {
    this.selectedBrand = null;
  }
  // brands.component.ts

}

