import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private service: GithubFollowersService) { }

  followers: any = []

  ngOnInit() {

    this.service.getFollowers()
      .subscribe(res => {
        console.log(res)
        this.followers = res
      })
  }

}
