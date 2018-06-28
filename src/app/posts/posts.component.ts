import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private service: PostService) {
  }

  createPost(titleInput: HTMLInputElement) {
    const postObj = {title: titleInput.value};
    this.service.createPost(titleInput, postObj)
      .subscribe(response => {
        postObj['id'] = response.json().id;
        this.posts.splice(0, 0, postObj);
        console.log(response.json());
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response.json());
      });
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
          this.posts = response.json();
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
