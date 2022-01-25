import { Component, OnInit } from '@angular/core';
import productdata from '../products.json'

interface productslist{
  
   
    p_name:String;
    p_id:Number;
    p_cost:Number;
    p_availability:Number;
    p_details:String;
    p_category:String;
    img:string;
 

}
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styles: [
  ]
})
export class FrontPageComponent implements OnInit {
  productList: productslist[] = productdata;  
   pp:any=[]
  constructor() { }

  ngOnInit(): void {
   
    this.pp = this.productList;

    //  for(let i=0;i<=this.productList.length;i++){
    //    debugger
    //  //this.pp.push(this.productList[i].p_category)
      
    // }
   
   this.sort();
  }


  sort(){
    for(let i=0;i<=this.pp.length;i++){
       debugger
      //  //this.pp.push(this.productList[i].p_category)
      console.log("sdjkh"+this.pp[i].p_category)

      }

  }

}
