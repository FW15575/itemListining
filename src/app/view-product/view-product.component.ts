import { Component,OnInit } from '@angular/core';
import { productdata } from '../shared/productmodel';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

products!:productdata[]

constructor(private api:ApiService){

}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getProduct().subscribe((res)=>{
      this.products=res;
      console.log(this.products)
    })
  }

}
