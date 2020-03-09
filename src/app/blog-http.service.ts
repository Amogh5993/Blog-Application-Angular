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


  public allBlogs = [];
  public currentBlog: any;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  // tslint:disable-next-line:max-line-length
  private authToken = 'ZTE5YmIzYmUzODBkNGZhODVmYTI2YTIyMjM4YzBhODFlZDA3ODZiMjY4MDJmYzE0YTJiM2UxODkzMDFiZDQ2OTQ2NzA3NGMyMDViY2I3OGRiNzNlODFkMmMwNjY4MTE3MjYwY2FhZTU2N2MxNzA3YTY1YTliNjdhYzRmZDQ4YjZjYQ==';



  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {

    console.log('Blog-Http-Service is called');

  }

  // Exception Handler
  private handleError(err: HttpErrorResponse) {
    console.log('Handle error http calls');
    console.log(err.message);
    // tslint:disable-next-line: deprecation
    return Observable.throw(err.message);
  }

  // method to return all the blogs
  public getAllBlogs(): any {
    // tslint:disable-next-line:max-line-length
    const myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  }

  // method to get a particular blog
  public getSingleBlogInformation(currentBlogId: string): any {

    const myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;

  }

  public createBlog(blogData): any {
    const myResponse = this._http.post(this.baseUrl + '/create' + '/' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  } // end create blog here

  public deleteBlog(blogId): any {
    const data = {};
    const myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    return myResponse;
  } // emd delete blog here

  public editBlog(blogId, blogData): any {
    const myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
    return myResponse;

  } // end edit blog here
}
