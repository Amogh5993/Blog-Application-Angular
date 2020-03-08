import { Component, OnInit, OnDestroy } from '@angular/core';
// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {



  public currentBlog: any;

    constructor(private route: ActivatedRoute, private router: Router, public blogService: BlogService) {
    console.log('blog-view constructor is called');

  }
  ngOnInit() {
    console.log('ngOnInitCalled');
    // getting the blog id from the route
    const myBlogId = this.route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    // calling the function to get the blog with this blogId out of the overall array
    this.currentBlog = this.blogService.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);
  }


  ngOnDestroy() {
    console.log('ngOnDestroyCalled');
  }

}
