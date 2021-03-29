import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'The best way to get started is to quit talking and begin doing','Daniel','Anzal',new Date(2020,3,14),0,0)
  ];
  toggleDetails(index:any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
 addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete: any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  highestVoteCount: number
  lowestVoteCount: number
  voteCount: number
  
  highestUpVotebtn() {
    this.highestVoteCount= 0
    this.lowestVoteCount = 0

  for (this.voteCount = 0; this.voteCount < this.quotes.length; this.voteCount++) {
    this. lowestVoteCount = this.quotes[this.voteCount].upvotes;
    if (this. lowestVoteCount > this.highestVoteCount) { this.highestVoteCount = this. lowestVoteCount }
  }
  return this.highestVoteCount
}
  constructor() { }

  ngOnInit(): void {
  }

}
