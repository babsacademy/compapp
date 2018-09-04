
import { Component, OnInit } from '@angular/core';
import { AnnonceService } from './annonce.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'comparer';
  annonces = []

  
  constructor(private getService:AnnonceService){
    
  }
   ngOnInit(){
    this.getService.getAnnonce().subscribe(responseAnnonce =>this.annonces= responseAnnonce)
      }
  }
