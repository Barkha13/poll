import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from './../api.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  _question = {
    quest : '',
    opt1 : '',
    opt2 : '',
    opt3 : '',
    opt4 : '',
  }

  constructor(private _apiService : ApiService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this._question.quest,'--------',this._question.opt1,this._question.opt2,this._question.opt3,this._question.opt4);
    this._apiService.addPoll(this._question.quest);
    // this._apiService.addOptions(this._question.opt1,this._question.opt2,this._question.opt3,this._question.opt4);
    
    this.router.navigate(['dashboard']);
    this._question = {
      quest : '',
      opt1 : '',
      opt2 : '',
      opt3 : '',
      opt4 : '',
    }

  }
}
