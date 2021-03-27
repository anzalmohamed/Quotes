export class Quotes {
    showDetails:boolean;
    constructor(
   
        public quoteName: string,
        public author: string,
        public submitter: string,
        public completeDate: Date,
      ) {  this.showDetails=false }
}

