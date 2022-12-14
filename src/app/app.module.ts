import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductcategorylistComponent } from './components/productcategorylist/productcategorylist.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductcategoryComponent } from './components/productcategory/productcategory.component';
import { FormsModule } from '@angular/forms';
const routes:Routes=[
{path:"",component:HomeComponent},
{path:"productlist", component:ProductlistComponent},
{path:"categorylist", component:ProductcategorylistComponent},
{path:"addProduct", component:AddProductComponent},
{path:"addCategory", component:ProductcategoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductcategorylistComponent,
    HomeComponent,
    AddProductComponent,
    ProductcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
