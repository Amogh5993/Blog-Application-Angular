import { Component, OnInit } from '@angular/core';
// importing route related code
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  // empty object
  public currentBlog: any;

  // declare a dummy blog variable here
  public allBlogs = [
    {
      blogId: '1',
      lastModified: '2017-10-20T12:20:47.854Z',
      created: ' 2017-10-20T12:20:47.854Z',
      tags: [],
      author: 'Admin',
      category: 'Comedy',
      isPublished: 'true',
      views: 0,
      bodyHtml: 'this is blog 1 body',
      description: 'this is blog 1 description',
      title: 'This is blog 1'
    },
    {

      blogId: '2',
      lastModified: '2017-10-21T12:20:47.678Z',
      created: ' 2017-10-21T12:20:47.678Z',
      tags: [],
      author: 'Admin',
      category: 'Comedy',
      isPublished: 'true',
      views: 0,
      bodyHtml: '<h1>this is blog 2 body</h1> <p>small text</p>',
      description: 'this is blog 2 description',
      title: 'This is blog 2'
    },
    {
      blogId: '3',
      lastModified: '2017-10-22T12:20:47.758Z',
      created: ' 2017-10-21T12:20:47.758Z',
      tags: [],
      author: 'Admin',
      category: 'Comedy',
      isPublished: 'true',
      views: 0,
      bodyHtml: '<h1>this is blog 3 body</h1> <p>small text</p>',
      description: 'this is blog 3 description',
      title: 'This is blog 3'

    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('constructor is called');

  }
  ngOnInit() {
    console.log('ngOnInitCalled');
    // getting the blog id from the route
    const myBlogId = this.route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    // calling the function to get the blog with this blogId out of the overall array
    this.getSingleBlogInformation(myBlogId);
  }
  public getSingleBlogInformation(currentBlogId): any {
    // using a for loop here from type Script
    // https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html

    for (const blog of this.allBlogs) {
      if (blog.blogId === currentBlogId) {
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
  }

}
