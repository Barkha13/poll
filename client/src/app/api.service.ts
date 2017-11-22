import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
export class ApiService {

  private name;

  constructor(private _http: Http, private router: Router, private route: ActivatedRoute) { }

  setName(name){
    this.name = name;
    
  }

  getName(){
    return this.name;
  }


}
