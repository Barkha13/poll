import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { ApiService} from './../api.service';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  id;
  poll;
  polls;

  constructor(private activatedRoute: ActivatedRoute, private _apiService : ApiService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.poll = this._apiService.showPoll(this.id,(data)=>{
      this.poll = data;
    })
  }

  onClick(p_id,option){
    this._apiService.vote(p_id,option);
    this.ngOnInit();
  }

}
