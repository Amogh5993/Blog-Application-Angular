import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


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

  public currentBlog: any;

    constructor() {
    console.log('Service constructor is called');
  }

  // method to return all the blogs
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  // method to get a particular blog
  public getSingleBlogInformation(currentBlogId: string): any {
    // using a for loop here from type Script
    // https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
    for (const blog of this.allBlogs) {
      if (blog.blogId === currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }
}
