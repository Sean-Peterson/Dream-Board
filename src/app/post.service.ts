import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.posts = angularFire.database.list('posts');
  }

  getPosts() {
    return this.posts;
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  getPostById(postId: string){
    return this.angularFire.database.object('/posts/' + postId);
  }

  updatePost(localUpdatedPost){
    var postEntryInFirebase = this.getPostById(localUpdatedPost.$key);
    console.log(postEntryInFirebase);
    postEntryInFirebase.update({
      title: localUpdatedPost.title,
      image: localUpdatedPost.image,
      why: localUpdatedPost.why,
      country: localUpdatedPost.country
    });

  }

  deletePost(localPostToDelete){
    var postEntryInFirebase = this.getPostById(localPostToDelete.$key);
    console.log(localPostToDelete.$key);
    postEntryInFirebase.remove();
  }
}
