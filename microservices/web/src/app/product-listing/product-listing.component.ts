import { Component, OnInit } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})


export class ProductListingComponent implements OnInit {
products:Array<Object>
names: string[];
data: Object;
  constructor(public http: Http) { 
   this.http = http;
   this.getHomeProducts();
  }

  getHomeProducts(): void
  {
  let headers: Headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-auth-header', 'Z74569-3bf451-78f25-899584-4be5672fd89f6');
  let opts: RequestOptions = new RequestOptions();
  opts.headers = headers;

	this.http.request('http://localhost:81/product',opts)
   .subscribe((res: Response) => {
	this.products = res.json();
	
	console.log(this.data)
 });
  }


  ngOnInit() {
  }

}
