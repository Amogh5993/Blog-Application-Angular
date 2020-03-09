import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs = [];

  constructor(public blogHttpService: BlogHttpService) {
    console.log('Home Component constructor called');
  }

  ngOnInit(): void {

    console.log('Home Component OnInit called');

    // this.allBlogs = this.blogHttpService.getAllBlogs();

    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      (      data: { [x: string]: any[]; }) => {
        console.log('logging data');
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.allBlogs = data['data'];
      },
      (error: { errorMessage: any; }) => {
        console.log('Some error occured');
        console.log(error.errorMessage);

      }
    );
    console.log('this.allBlogs');
  }

  // Exception Handler
private handleError(err: HttpErrorResponse) {
  console.log('Handle error http calls');
  console.log(err.message);
  // tslint:disable-next-line: deprecation
  return Observable.throw(err.message);
}

  ngOnDestroy(): void {
    console.log('Home Component OnDestroy called');
  }

}
