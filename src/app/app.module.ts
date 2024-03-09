import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarBlackComponent } from './components/navbar-black/navbar-black.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CategoriesSliderComponent } from './components/categories-slider/categories-slider.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { RouterModule } from '@angular/router';
import{BrowserAnimationsModule } from'@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TrimPipe } from './pipes/trim.pipe';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './components/interceptors/loader.interceptor';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';
import { RimPipe } from './pipes/rim.pipe';
import { FilterproductsnotfeaturedPipe } from './pipes/filterproductsnotfeatured.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    NavbarBlackComponent,
    NavbarAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    MainSliderComponent,
    CategoriesSliderComponent,
    FeaturedProductComponent,
    ProductDetailsComponent,
    TrimPipe,
    FilterProductsPipe,
    PaymentComponent,
    AllordersComponent,
    LoaderComponent,
    CategorydetailsComponent,
    WhishlistComponent,
    RimPipe,
    FilterproductsnotfeaturedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
