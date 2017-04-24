import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
  providers: [BlogService]
})
export class NewBlogComponent implements OnInit {

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {
  }

  submitForm(title: string, image: string, content: string, country: string) {
    var newBlog: Blog = new Blog(title, image, content, country);
    this.blogService.addBlog(newBlog);
    this.router.navigateByUrl('/');
  }

}
