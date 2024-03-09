import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'filterproductsnotfeatured'
})
export class FilterproductsnotfeaturedPipe implements PipeTransform {

  transform(products: Product[], SearchTerm: string): Product[] {
    return products.filter((ele) => ele.title.toLowerCase().includes(SearchTerm.toLowerCase()));
  }

}
