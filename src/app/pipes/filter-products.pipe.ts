import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(product:Product [],searchTerm:string): Product[] {
    return product.filter((ele)=>ele.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
}
