import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {

  followers: any;

  constructor(private service: PostService) {
    /*console.log(service);*/
  }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
        this.followers = response.json();
        console.log('All Follower' + response.json());
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('This post has already been deleted');
        } else {
          alert('an Unexpected error occured.');
        }

        console.log(error);
      });
  }
}
