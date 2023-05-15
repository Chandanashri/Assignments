import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greatestnumber',
  templateUrl: './greatestnumber.component.html',
  styleUrls: ['./greatestnumber.component.css']
})
export class GreatestnumberComponent implements OnInit {
  value1:number;
  value2:number;
  
  constructor(){
  this.value1 = 5;
  this.value2 = 10;
  
}
ngOnInit(): void {
  
}
}
