import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
        console.log(response.json());
      });
  }

  createPost(titleInput: HTMLInputElement) {
    const postObj = {title: titleInput.value};
    this.http.post(this.url, JSON.stringify(postObj))
      .subscribe(response => {
        postObj['id'] = response.json().id;
        this.posts.splice(0, 0, postObj);
        console.log(response.json());
      });
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response.json());
      });
  }


}
