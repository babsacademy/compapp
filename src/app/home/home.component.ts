
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  priceProduct = "";
	
  constructor(private http: Http) { }

  ngOnInit() {

  }
  searchProducts(){
    this.http.get('http://localhost:3000/annonces&q=' + this.priceProduct)
  }
 
}
