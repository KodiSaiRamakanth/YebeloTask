import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})

export class ProductListComponent implements OnInit {
  @Input() data: any;
  productItem:any
  constructor() { }

  ngOnInit(): void {
this.productItem = this.data;
    console.log(this.data.p_name);
  }

}
