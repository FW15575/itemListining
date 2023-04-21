import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productdata } from './shared/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  // Create Product

  addProduct(data:productdata){
   return this.http.post("http://localhost:3000/products",data)
  }

  //Get Product

  getProduct(){
    return this.http.get<productdata[]>("http://localhost:3000/products")
  }
}
