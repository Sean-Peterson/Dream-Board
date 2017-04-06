import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../providers/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) {}

  posts: FirebaseListObservable<any[]>;
  ngOnInit() {
    this.posts = this.postService.getPosts()
  }

  goToDetailPage(clickedAlbum) {
    this.router.navigate(['post', clickedAlbum.$key]);
  }

}
