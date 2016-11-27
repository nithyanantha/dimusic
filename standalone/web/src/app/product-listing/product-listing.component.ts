import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

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
   this.names = ['Ari', 'Carlos', 'Felipe', 'Nate','siva','kamal','Ari', 'Carlos', 'Felipe', 'Nate','siva','kamal','Ari', 'Carlos', 'Felipe', 'Nate','siva','kamal'];
   this.products=[{name:'3 Colours Red',image:'1.jpg',isNew:true,facebook:[100,20,35]},
   {name:'3 Colours Red',image:'2.jpg',isNew:false,facebook:[90,20,25]},
   {name:'13 Engines',image:'3.jpg',isNew:false,facebook:[10,10,45]},
   {name:'Alex Turner',image:'4.jpg',isNew:true,facebook:[80,60,85]},
   {name:'Alice in Chains',image:'5.jpg',isNew:true,facebook:[10,0,11]},
   {name:'Alien Ant Farm',image:'6.jpg',isNew:false,facebook:[2,20,75]},
   {name:'Better Than Ezra',image:'7.jpg',isNew:true,facebook:[0,20,37]},
   {name:'Charlotte Gainsbourg',image:'8.jpg',isNew:false,facebook:[4,20,25]},
   {name:'Death Cab for Cutie',image:'9.jpg',isNew:false,facebook:[30,30,35]},
   {name:'Fine Young Cannibals',image:'10.jpg',isNew:false,facebook:[70,70,85]}
   ,{name:'Gin Blossoms',image:'11.jpg',isNew:true,facebook:[1,2,3]}
   ,{name:'Hollywood Undead',image:'12.jpg',isNew:false,facebook:[0,0,5]}
   ,{name:'Imogen Heap',image:'4.jpg',isNew:false,facebook:[50,10,44]}
   ,{name:'Jill Sobule',image:'8.jpg',isNew:false,facebook:[60,20,22]}
   ,{name:'Kings of Convenience',image:'1.jpg',isNew:false,facebook:[50,20,46]}
   ,{name:'LostAlone',image:'2.jpg',isNew:false,facebook:[40,20,10]}];
   this.makeRequest();
  }

  makeRequest(): void
  {
	this.http.request('http://jsonplaceholder.typicode.com/posts/1')
   .subscribe((res: Response) => {
	this.data = res.json();
	
	console.log(this.data)
 });
  }


  ngOnInit() {
  }

}
