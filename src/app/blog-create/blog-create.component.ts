import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService) { }

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
        alert('Blog Posted Successfully');
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
        alert('Some error occured');
      }
    );
  } // end blog create method
}
