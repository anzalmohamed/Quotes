import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVoteCount]'
})
export class VoteCountDirective {

  constructor(elem:ElementRef) { elem.nativeElement.style.backgroundColor = "#2b5876" }

}
