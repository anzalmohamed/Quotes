export class Quote {
  [x: string]: any;
  showAuthor: boolean;
  showSubmitter: boolean;
  constructor(public id: number, public name: string, public author: string, public submitter: string, public completeDate: Date
    , public upvotes: number,
    public downvotes: number,) {
    this.showAuthor = false;
    this.showSubmitter = false;
  }

}
