import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './providers/auth.service';

import { HomeComponent } from './home/home.component';
import { NewDreamComponent } from './new-dream/new-dream.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { PostComponent } from './post/post.component';
import { LoginPageComponent } from './login-page/login-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'new-dream',
    component: NewDreamComponent
  },
  {
    path: 'new-blog',
    component: NewBlogComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
