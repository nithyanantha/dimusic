import { Component, OnInit,Input } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  data: Object;	
  result:Object;
  @Input() product: string;
  constructor(public http: Http) {
  this.http = http;
  }

  addToBasket(product): void
  {

  let headers: Headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-auth-header', 'Z74569-3bf451-78f25-899584-4be5672fd89f6');
  let opts: RequestOptions = new RequestOptions();
  opts.headers = headers;
  console.log(headers);
  this.http.post('http://localhost:82/basket',
  JSON.stringify({
  productName: product,
  quantity: 1,
  price: '50$'
 }),opts)
   .subscribe((res: Response) => {
  var result = res.json();
  
  alert(result.message);
 });

  }

  ngOnInit() {
  }

}
