import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogService) {}

    blogId: string = null;
    blogs: Blog[] = [];
    ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.blogId = (urlParameters['id']);
      });
      this.blogService.getBlogs().subscribe(dataLastEmittedFromObserver => {
        for(var i = 0; i < dataLastEmittedFromObserver.length ;i++) {
          if(dataLastEmittedFromObserver[i].$key == this.blogId) {
            this.blogs.push(dataLastEmittedFromObserver[i]);
          }
        }
      })
    }

  form: boolean = false;

  formShow(){
    this.form = true;
  }

  formHide(){
    this.form = false;
  }

}
