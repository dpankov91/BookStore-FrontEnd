import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";

@Component({
  selector: 'app-bookshop',
  templateUrl: './bookshop.component.html',
  styleUrls: ['./bookshop.component.scss']
})
export class BookshopComponent implements OnInit {

  books: Book[]

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

  }


  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(listOfBooks => this.books = listOfBooks);
  }
}
