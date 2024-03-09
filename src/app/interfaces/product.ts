export interface Product {
  _id:string,
  title:string,
  description:string,
  imageCover:string,
  ratingsAverage:number,
  category:Category,
  price:number,
  images:string[]
}

export interface Category{
  _id?:string;
  name:string;
  slug?:string;
  image:string;
}
