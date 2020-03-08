import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import {BlogHttpService} from '../blog-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs: any;

  constructor(public blogHttpService: BlogHttpService) {
    console.log('Home Component constructor called');
    }

  ngOnInit(): void {
    console.log('Home Component OnInIt called');
    this.allBlogs = this.blogHttpService.getAllBlogs();
    console.log(this.allBlogs);
  }

  ngOnDestroy(): void {
    console.log('Home Component OnDestroy called');
  }

}
