import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {PostsService} from "../forms/services/posts.service";
import {Post} from "./post.model";

@Component({
  selector: 'post-popup',
  templateUrl: 'post-popup.component.html',
  styleUrls: ['post-popup.component.scss']
})
export class PostPopupComponent implements OnInit {

  @Input() id: number;

  post: Post;

  constructor(protected ref: NbDialogRef<PostPopupComponent>, public postService: PostsService) {
  }

  ngOnInit(): void {
    if (this.id) {
      this.postService.loadPostById(this.id).subscribe((data: Post) => {
        this.post = data;
      })
    } else {
      this.post = new Post();
    }
  }

  close() {
    this.ref.close();
  }

  add() {
    this.postService.add(this.post).subscribe(
      () => {
      },
      (err: any) => {
        console.error(err)
      }
    );
  }

  edit() {
    this.postService.edit(this.post).subscribe(
      () => {
      },
      (err: any) => {
        console.error(err)
      }
    );
  }

  delete() {
    this.postService.delete(this.id).subscribe(
      () => {
      },
      (err: any) => {
        console.error(err)
      }
    )
  }

}
