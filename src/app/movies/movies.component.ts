import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies:any[] = [

    {title:"Magadheera",genre:"History",director:"Rajmouli"},
    
    {title:"RRR",genre:"History",director:"Rajmouli"}
    
    ];
}
