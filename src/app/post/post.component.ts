import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) {}

  postId: string = null;
  posts: Post[] = [];
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = (urlParameters['id']);
    });
    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      for(var i = 0; i < dataLastEmittedFromObserver.length ;i++) {
        if(dataLastEmittedFromObserver[i].$key == this.postId) {
          this.posts.push(dataLastEmittedFromObserver[i]);
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
