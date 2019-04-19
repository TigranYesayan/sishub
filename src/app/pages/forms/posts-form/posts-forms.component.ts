import {Component, OnInit} from '@angular/core';
import {PostsService} from "../services/posts.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'posts-form',
  templateUrl: 'posts-form.component.html',
  styleUrls: ['posts-form.component.scss']
})
export class PostsFormsComponent implements OnInit{
  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute) {

  }

  public post: any;

  public isReady: boolean;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParams: Parameters<any>) => {
      this.postService.loadPostById(queryParams['id']).subscribe((post: any) => {
        this.post = post;
        this.isReady = true;
      });
    });

  }

  vote(post: any) {
    this.postService.vote(post.id).subscribe();
  }

  addComment(comment: any, answer: any) {
    answer.comments.push({text: comment.value});
    this.postService.addComment(comment.value, answer.id);
    comment.value = '';
  }
}
