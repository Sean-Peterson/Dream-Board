import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService]
})


export class EditPostComponent implements OnInit {
  @Input() posts
  @Output() clickSender = new EventEmitter();

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  submitUpdate(postToUpdate) {
    this.postService.updatePost(postToUpdate);
    this.clickSender.emit();
    this.router.navigateByUrl('/');
  }

  beginDeletingPost(postToDelete){
    if(confirm("Are you sure you want un-dream this?")){
      this.postService.deletePost(postToDelete);
    }
    this.router.navigateByUrl('/');
  }

}
