import { Component, OnInit, OnDestroy } from '@angular/core';
// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

import { BlogHttpService } from '../blog-http.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {



  public currentBlog: any;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService) {
    console.log('blog-view constructor is called');

  }
  ngOnInit() {
    console.log('ngOnInitCalled');
    // getting the blog id from the route
    const myBlogId = this.route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);


    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.currentBlog = data['data'];
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }


    );
  }

// Exception Handler
private handleError(err: HttpErrorResponse) {
  console.log('Handle error http calls');
  console.log(err.message);
  // tslint:disable-next-line: deprecation
  return Observable.throw(err.message);
}
  ngOnDestroy() {
    console.log('ngOnDestroyCalled');
  }

}
