export class Quote {
    showAuthor: boolean;
    showSubmitter:boolean;
  constructor(public id: number,public name: string,public author: string, public submitter: string, public completeDate: Date){
    this.showAuthor=false;
    this.showSubmitter=false;
  }
 
}
