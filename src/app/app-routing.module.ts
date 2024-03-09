import { WhishlistComponent } from './components/whishlist/whishlist.component';
import { authGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';

const routes: Routes = [
  {path:"",component:BlankLayoutComponent,canActivate:[authGuard],children:[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"products",component:ProductsComponent},
    {path:"brands",component:BrandsComponent},
    {path:"categories",component:CategoriesComponent},
    {path:"categorydetails/:id",component:CategorydetailsComponent},
    // {path:"cart",component:CartComponent},
    {path:"allorders",component:AllordersComponent},
    { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
    {path:"checkout/:id", component:PaymentComponent},
    {path:"details/:id",component:ProductDetailsComponent},
    {path:'setting',loadChildren:()=>import('./setting-data/setting-data.module').then((m)=>m.SettingDataModule)},
    {path:'whishlist',component:WhishlistComponent},
  ]},
  {path:"",component:AuthLayoutComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent}
  ]},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
