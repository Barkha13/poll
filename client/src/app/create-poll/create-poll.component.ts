import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
