import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  [x: string]: any;
  newQuote=new Quotes(0, '','','', new Date())
addNewQuote(quotes: Quote){
  let quotesLength = this.quotes.length;
 
  this.quotes.push(quotes)
}
  constructor() { }

  ngOnInit(): void {
  }

}
