import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  book:Book;

  constructor(private bookService:BookService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        let bcode = params['bcode'];
        console.log(bcode);
        this.bookService.getBook(bcode).subscribe(
          (data)=>this.book=data
        );
      }
    );
  }

  doDelete(){
    if(confirm("Are You Fucking Sure?")){
      this,this.bookService.deleteBook(this.book.bcode).subscribe(
        (resp)=>{
          if(resp.ok){
            this.router.navigateByUrl("/");
          }
        }
      );
    }
  }

  doEdit(){
    this.router.navigateByUrl("/edit/"+this.book.bcode);
  }

}
