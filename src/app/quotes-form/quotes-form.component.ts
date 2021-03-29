import { Quote } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
//import { type } from 'node:os';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})

export class QuotesFormComponent implements OnInit {
  [x: string]: any;
newQuote=new Quotes(0, '','','', new Date())
      constructor() { }
      @Output() addQuotes = new EventEmitter<Quotes>();
      submitQuotes(){
        this.addQuotes.emit(this.newQuote);
          }

  //newQuotes=new Quote('','','','','')   
  
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
