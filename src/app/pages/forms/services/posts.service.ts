import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {delay, map} from "rxjs/operators";
import {of} from "rxjs";
import {Post} from "../../post-popup/post.model";

const postUrl = "http://SIS2N046:8080/posts";
const commentUrl = "http://SIS2N046:8080/comments";
const voteUrl = "http://SIS2N046:8080/posts/vote";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {

  }

  add(post: Post): Observable<any>{
    if(post.parentId){
      post.postTypeId = 1;
    } else {
      post.postTypeId = 0;
    }
    post.ownerUserId = 1;
    return this.http.post(postUrl, post, httpOptions);
  }

  edit(post: Post): Observable<any>{
    return this.http.put(postUrl + "/" + post.id, post, httpOptions)
  }

  delete(id: number): Observable<any>{
    return this.http.delete(postUrl + "/" + id)
  }

  loadPostById(postId: number) : Observable<any> {
    return this.http.get(postUrl + '/' + postId);
  }


  public vote(postId: number): Observable<any> {
    return this.http.post(voteUrl, {userId: 1,postId: postId });
  }

  public addComment(comment: string, postId: number): Observable<any> {
    const body = {
      ownerUserId: 1,
      text: comment,
      postId: postId
    };
    return this.http.post(`${commentUrl}`, body);
  }
}
