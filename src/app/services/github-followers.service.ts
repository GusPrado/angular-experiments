import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {

  constructor(private _http: HttpClient) { }

  url: string = 'https://api.github.com/users/gusprado/followers'

  getFollowers() {
    return this._http.get(this.url)
  }
}
