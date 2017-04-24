import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { Blog } from './../blog.model';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
  providers: [BlogService]
})
export class EditBlogComponent implements OnInit {
  @Input() blogs
  @Output() clickSender = new EventEmitter();

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
  }

  submitUpdate(blogToUpdate) {
    this.blogService.updateBlog(blogToUpdate);
    this.clickSender.emit();
    this.router.navigateByUrl('/');
  }

  beginDeletingBlog(blogToDelete){
    if(confirm("Are you sure you want delete this?")){
      this.blogService.deleteBlog(blogToDelete);
    }
    this.router.navigateByUrl('/');
  }

}
