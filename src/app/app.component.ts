import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  isActive = false;
  tweet = {
    body: 'tweet body',
    isLiked: false,
    likesCount: 0
  }

  handleClick(){
    this.isActive = !this.isActive
  }
}
