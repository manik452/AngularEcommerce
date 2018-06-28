import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  private flowerUrl = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: Http) {
  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(titleInput, postObj) {
    return this.http.post(this.url, JSON.stringify(postObj));
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id);
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  }

  getAll() {
    return this.http.get(this.flowerUrl);
  }
}
