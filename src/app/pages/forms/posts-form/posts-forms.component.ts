import {Component, OnInit} from '@angular/core';
import {PostsService} from "../services/posts.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Post} from "../../post-popup/post.model";

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
      this.postService.loadPostById(+queryParams['id']).subscribe((post: any) => {
        this.post = post;
        this.isReady = true;
      });
    });

  }

  vote(post: any) {
    this.postService.vote(post.id).subscribe();
  }

  addComment(comment: any, answer: any) {
    const commentValue = comment.value && comment.value.trim();
    if(commentValue){
      this.postService.addComment(commentValue, answer.id).subscribe(res => {
        answer.comments.push(res);
      });
    }
    comment.value = '';
    answer.showAddComment = false;
  }

  addAnswer(answer: any) {
    const answerValue = answer.value && answer.value.trim();
    if(answerValue){
      this.postService.add({
        parentId: this.post.id,
        body: answerValue
      } as Post).subscribe(resAnswer => {
        this.post.answers.push(resAnswer);
      });
    }
    answer.value = '';
    this.post.showAddAnswer = false;
  }
}
