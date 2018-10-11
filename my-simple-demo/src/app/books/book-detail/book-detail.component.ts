import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../books.component';

@Component({
  selector: 'app-book-detail',
  // templateUrl: './book-detail.component.html',
  template: `
    <ul>
      <li>index: {{i}}</li>
      <li>{{book.id}}</li>
      <li>{{book.title}}</li>
      <li>{{book.author}}</li>
    </ul>
  `,
  // styleUrls: ['./book-detail.component.css']
  styles: []
})
export class BookDetailComponent implements OnInit {
  @Input() i : number = null;
  @Input() book: Book = null;

  constructor() { }

  ngOnInit() {
  }

}
