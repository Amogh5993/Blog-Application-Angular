import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { BlogService } from './../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technical'];

  // tslint:disable-next-line:max-line-length
  constructor( private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService, private toastr: ToastrService) { }

  ngOnInit() {
    // getting the blog id from the route
    const myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.currentBlog = data['data'];
        console.log('Current Blog is');
        console.log(this.currentBlog);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }


    );


  }

  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog ).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog edited Successgfully', 'Success');
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000);
      },
      error => {
        console.log('Some error occured');
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'error!');
      }
    );
  }

}
