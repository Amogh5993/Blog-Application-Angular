import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
