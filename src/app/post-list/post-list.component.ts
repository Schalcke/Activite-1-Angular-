import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postloveIts: number;
  @Input() postCreated_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onPostloveIts() {
    return  this.postloveIts++;
  }

  onPostDontloveIts() {
    return  this.postloveIts--;
  }

  getColor() {
    if (this.postloveIts > 0) {
      return 'green';
    } else if(this.postloveIts < 0) {
      return 'red';
    }
  }

}
