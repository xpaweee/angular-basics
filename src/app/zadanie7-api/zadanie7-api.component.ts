import { Observable } from 'rxjs';
import { HttpService } from './../Services/htpp.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-zadanie7-api',
  templateUrl: './zadanie7-api.component.html',
  styleUrls: ['./zadanie7-api.component.css']
})
export class Zadanie7APIComponent implements OnInit {

allPost$: Observable<Array<Post>>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.allPost$ = this.httpService.posts$;
  }
  // getPosts() {
  //   this.allPost$ = this.httpService.getPosts();
  //   this.httpService.getPosts().subscribe(posts => {
  //     console.log(posts);
  //   },
  //   (error: HttpErrorResponse) => {
  //     console.log(error);
  //   });
  // }


  getPost() {
    this.httpService.getPost(1).subscribe(posts => {
      console.log(posts);
    });
  }

  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe(posts => {
      console.log(posts);
    });
  }

  addPost() {
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'Moj post',
      body: 'Pierwszy post',
    });

    this.httpService.addPost(p).subscribe(post => {
      console.log(post);
    });
  }

  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'testowy tyul v2',
      body: 'nowy wpis',
    });

    this.httpService.updatePost(p).subscribe(post => {
      console.log(post);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe(posts => {
      console.log(posts);
    });
  }

  changePost() {
    const p: Post = ({
      id: 1,
      body: 'zmiana tylko tutaj'
    });

    this.httpService.changePost(p).subscribe(post => {
      console.log(post);
    });
  }




}





export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
