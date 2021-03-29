import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quote[] = [
   new Quote(1, 'The best way to get started is to quit talking and begin doing','Daniel','Anzal',new Date(2020,3,14),0,0),
    
  ];
}
