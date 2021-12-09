import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   finishedChores = [];

   targetImage = 'https://www.svgrepo.com/show/164035/target.svg';

   constructor() { }

   ngOnInit() {
   }

}
