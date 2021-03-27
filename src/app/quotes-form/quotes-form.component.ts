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
