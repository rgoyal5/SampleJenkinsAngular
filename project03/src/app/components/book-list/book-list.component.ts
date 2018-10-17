import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[];
  constructor(private bookService:BookService,
              private router : Router) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      data=>this.books=data
    );
  }

  showBook(bcode){
    this.router.navigateByUrl("/view/"+bcode);
  }

}
