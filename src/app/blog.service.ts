import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class BlogService {
  blogs: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.blogs = angularFire.database.list('blogs');
  }

  getBlogs() {
    return this.blogs;
  }

  addBlog(newBlog: Blog) {
    this.blogs.push(newBlog);
  }

  getBlogById(blogId: string){
    return this.angularFire.database.object('/blogs/' + blogId);
  }

  updateBlog(localUpdatedBlog){
    var blogEntryInFirebase = this.getBlogById(localUpdatedBlog.$key);
    console.log(blogEntryInFirebase);
    blogEntryInFirebase.update({
      title: localUpdatedBlog.title,
      image: localUpdatedBlog.image,
      content: localUpdatedBlog.content,
      country: localUpdatedBlog.country
    });

  }

  deleteBlog(localBlogToDelete){
    var blogEntryInFirebase = this.getBlogById(localBlogToDelete.$key);
    console.log(localBlogToDelete.$key);
    blogEntryInFirebase.remove();
  }
}
