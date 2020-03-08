import { Injectable } from '@angular/core';

// importing http client to make requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import observable related code
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {


  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';



  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {

    console.log('Blog-Http-Service is called');

  }

  // method to return all the blogs
  public getAllBlogs(): any {
    const myResponse = this._http.get(this.baseUrl + '/all');
    console.log(myResponse);
    return myResponse;
  }

  // method to get a particular blog
  public getSingleBlogInformation(currentBlogId: string): any {

  }
}
