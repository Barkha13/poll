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

  addPoll(que,opt1,opt2,opt3,opt4){
    this._http.post('/add_poll',{name: this.name, question: que, option1: opt1, option2: opt2, option3: opt3, option4: opt4})
    .subscribe(
      (response) => {
        console.log('added poll...');
      },
      (err) => {
        console.log('Error in adding...');
      }
    )
  }

  allPolls(callback){
    return this._http.get('/all')
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log('Error in display...',err);
      }
    )
  }

  showPoll(id,callback){
    return this._http.get(`/show_poll/${id}`)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log('error is..',err);
      }
    )
  }

  vote(p_id,option){
    return this._http.get(`/vote/${p_id}/${option}`)
    .subscribe(
      (response) => {
        console.log('added vote...');
      },
      (err) => {
        console.log('Error in adding vote...');
      }
    )
  }

  delete(d_id){
    this._http.get(`/delete/${d_id}`)
    .subscribe(
      (response) => {
        console.log('deleted poll...');
      },
      (err) => {
        console.log('Error in deleting poll...');
      }
    )
  }
  
}
