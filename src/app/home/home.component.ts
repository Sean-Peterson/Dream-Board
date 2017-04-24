import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../providers/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService, BlogService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private postService: PostService, private blogService: BlogService) {}

  posts: FirebaseListObservable<any[]>;
  blogs: FirebaseListObservable<any[]>;
  desiredCountry: string = 'all'

  ngOnInit() {
    this.posts = this.postService.getPosts()
    this.blogs = this.blogService.getBlogs()
  }

  goToDetailPage(clickedAlbum) {
    this.router.navigate(['post', clickedAlbum.$key]);
  }

  goToBlogPage(clickedBlog) {
    this.router.navigate(['blog', clickedBlog.$key]);
  }


}
