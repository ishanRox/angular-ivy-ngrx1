import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
  customeVal: number;

  constructor() {}

  ngOnInit() {}

  setCustomeState() {
    console.log(this.customeVal);
  }
}
