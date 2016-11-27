import { Component, OnInit,Input } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  data: Object;	
  @Input() product: string;
  constructor(public http: Http) {
  this.http = http;
  }

  addToBasket(product): void
  {
    alert('Product: ****' +  product +  '**** has been added successfully to the cart');
	this.http.request('http://jsonplaceholder.typicode.com/posts/1')
   .subscribe((res: Response) => {
	this.data = res.json();
	
	console.log(this.data)
 });
  }

  ngOnInit() {
  }

}
