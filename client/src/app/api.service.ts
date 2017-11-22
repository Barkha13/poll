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

  addPoll(que){
    console.log('inside services addPoll...',que);
    this._http.post('/add_poll',{name: this.name, question: que})
    .subscribe(
      (response) => {
        console.log('added poll...');
      },
      (err) => {
        console.log('Error in adding...');
      }
    )
  }

  // addOptions(opt1,opt2,opt3,opt4){
  //   this._http.post('/add_options',{option1:opt1,option2:opt2,option3:opt3,option4:opt4})
  //   .subscribe(
  //     (response) => {
  //       console.log('added options...');
  //     },
  //     (err) => {
  //       console.log('Error in adding...');
  //     }
  //   )
  // }
}
