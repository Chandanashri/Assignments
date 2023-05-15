import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

cars:any[];
hide:boolean;
//define products array
constructor(){
this.cars = [
{
name:"BMW",
model:"3 series",
year:2023
},
{
name:"Benz",
model:"5 series",
year:2023
},
{
name:"Tesla",
model:"6 series",
year:2023
},

]



 this.hide = true;


}

// getCars():string[]{

//   return this.cars;

// }
 toggole(){

this.hide =!this.hide;

 }
public getCars():any[]{

return this.cars;

}
ngOnInit():void{
}
}

