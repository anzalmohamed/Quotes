import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

//import { type } from 'node:os';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})

export class QuotesFormComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }
      constructor() { }
      
    
  ngOnInit(): void {
  }
  



}

/*const form:any,= HTMLFormElement = document.querySelector('#myform');
form.onsubmit = () => {
  const formData = new FormData(form);

  const text = formData.get('textInput') as string;
  console.log(text);
  return false; // prevent reload
};*/
