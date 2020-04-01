import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
  }

  createPost(post) {
    return this.http.post(this.url, post)
  }

  deletePost(id) {
    console.log(`${this.url}/${id}`)
    return this.http.delete(`${this.url}/${id}`)

  }

  updatePost(post) {
    return this.http.patch(`${this.url}/${post.id}` , { isRead: true })
    //return this.http.put(this.url, post)
  }
}
