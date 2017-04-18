import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-new-dream',
  templateUrl: './new-dream.component.html',
  styleUrls: ['./new-dream.component.css'],
  providers: [PostService]
})
export class NewDreamComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
  }

  submitForm(title: string, image: string, why: string, country: string) {
    var newPost: Post = new Post(title, image, why, country);
    this.postService.addPost(newPost);
    this.router.navigateByUrl('/');
  }

}
