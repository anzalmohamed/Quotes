import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'The best way to get started is to quit talking and begin doing','Daniel','Anzal',new Date(2020,3,14)),
  ];
  toggleDetails(index:any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}