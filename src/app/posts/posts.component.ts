import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any[]
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {

    http.get(this.url)
      .subscribe(response => {
        this.posts = response
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = ''

    this.http.post(this.url, post)
      .subscribe(res => {
        console.log(res)
      })
  }

  updatePost(post) {
    this.http.patch(`${this.url}/${post.id}` , { isRead: true })
    //this.http.put(this.url, post)
      .subscribe(res => {
        console.log(res)
      })
  }

  deletePost(post) {
    this.http.delete(`${this.url}/${post.id}`)
      .subscribe(res => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      })
  }
}
