import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   invalid = false
   inputErr = ""

   constructor() { }

   ngOnInit() {
   }
   addMovie(newTitle: string){
      console.log(newTitle == "")
      if(!this.movies.includes(newTitle) && newTitle !== ""){
         this.movies.push(newTitle);
         this.invalid = false;
      } else if(this.movies.includes(newTitle)) {
         this.inputErr = "Title already added!"
         this.invalid = true
      } else {
         this.inputErr = "No title added!"
         this.invalid = true
      }
   }
}