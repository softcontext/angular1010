import { Component, OnInit } from '@angular/core';

export class Book {
  id: number;
  title: string;
  author: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {id: 1, title: '제목1', author: '저자1'},
    {id: 2, title: '제목2', author: '저자2'},
    {id: 3, title: '제목3', author: '저자3'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
