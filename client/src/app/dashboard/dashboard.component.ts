import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from './../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  login_name;
  polls = [];

  constructor(private _apiService : ApiService, private router: Router) { }

  ngOnInit() {
    this.login_name = this._apiService.getName();
    this._apiService.allPolls((data)=>{
      console.log(data);
      this.polls = data;
    });
    
  }


  onDelete(d_id){
    this._apiService.delete(d_id);
    this.ngOnInit();
  }

}
