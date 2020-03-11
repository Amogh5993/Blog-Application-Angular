import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService) {}

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technical'];

  ngOnInit(): void {
  }

  public createBlog(): any {

    const blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    };
    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log('Blog Created');
        console.log(data);
        this.toastr.success('Hello, I\'m the toastr message.');
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 1000);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
        alert('Error');
      }
    );
  } // end blog create method
}
