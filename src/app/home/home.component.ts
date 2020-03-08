import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs: any;

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    console.log('Home Component OnInIt called');
    this.allBlogs = this.blogService.getAllBlogs();
    console.log(this.allBlogs);
  }

  ngOnDestroy(): void {
    console.log('Home Component OnDestroy called');
  }

}
