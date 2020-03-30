import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any

  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = ''

    this.service.createPost(post)
      .subscribe(res => {
        this.posts.splice(0, 0, post)
      })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(res => {
        console.log(res)
      })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(res => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      })
  }
}
