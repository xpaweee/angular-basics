import { Observable, BehaviorSubject } from 'rxjs';
import { Post } from './../zadanie7-api/zadanie7-api.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService {
  private postsObs = new BehaviorSubject<Array<Post>>([]);
  posts$ = this.postsObs.asObservable();

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  getPosts() {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').subscribe(
      posts => {
        this.postsObs.next(posts);
      },
      err => {
        console.log(err);
      }
    );
  }
  // getPosts(): Observable<Array<Post>> {
  //   return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  // }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostByUser(userId: number): Observable<Post> {
    const param = new HttpParams().set('userId', userId + '');
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts', {params: param});
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  deletePost(id: number) {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  changePost(post: Post) {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
}
