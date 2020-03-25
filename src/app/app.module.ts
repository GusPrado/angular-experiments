import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    TitleCasePipe,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faHeart);
  }
 }
