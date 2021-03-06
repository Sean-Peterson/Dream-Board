import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './providers/auth.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewDreamComponent } from './new-dream/new-dream.component';
import { masterFirebaseConfig } from './api-keys';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { BlogComponent } from './blog/blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { CountryDreamPipe } from './country-dream.pipe';
import { CountryBlogPipe } from './country-blog.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewDreamComponent,
    PostComponent,
    EditPostComponent,
    LoginPageComponent,
    NewBlogComponent,
    BlogComponent,
    EditBlogComponent,
    CountryDreamPipe,
    CountryBlogPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
