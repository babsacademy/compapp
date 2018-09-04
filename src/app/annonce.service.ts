import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable()
export class AnnonceService {
    constructor(private http: Http){
        
    }

    private annonce_url = "http://localhost:3000/annonces";
    getAnnonce(){
        return this.http.get(this.annonce_url).pipe(map(res => res.json()));
    }

}