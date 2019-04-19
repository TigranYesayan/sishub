import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {delay, map} from "rxjs/operators";
import {of} from "rxjs";
import {Post} from "../../post-popup/post.model";

const postUrl = "/posts";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {

  }

  add(post: Post): Observable<any>{
    return this.http.post(postUrl, post, httpOptions)
  }

  edit(post: Post): Observable<any>{
    return this.http.put(postUrl + "/" + post.id, post, httpOptions)
  }

  delete(id: number): Observable<any>{
    return this.http.delete(postUrl + "/" + id)
  }

  loadPostById(postId: number) : Observable<any> {
    return of(JSON.parse(`{
  "id": 1,
  "body": "aaa aaa a  a",
  "closedDate": "2019-05-17",
  "creationDate": "2019-04-17",
  "favoriteCount": 3,
  "ownerUserId": 1,
  "parentId": 1,
  "postTypeId": 1,
  "score": 1,
  "tags": "de-service",
  "title": "How do you do?",
  "answers": [
    {
      "id": 2,
      "body": "aaa aaa a  a",
      "closedDate": "2019-05-17",
      "creationDate": "2019-04-17",
      "favoriteCount": 3,
      "ownerUserId": 1,
      "parentId": 1,
      "postTypeId": 1,
      "score": 1,
      "tags": "de-service",
      "title": "How do you do?",
	  "accept": true,
      "comments": [
        {
          "id": 1,
          "creationDate": "2018-10-04",
          "score": 3,
          "postId": 2,
          "text": "uuu n",
          "userId": 1
        }
      ]
    },
    {
      "id": 2,
      "body": "aaa aaa a  a",
      "closedDate": "2019-05-17",
      "creationDate": "2019-04-17",
      "favoriteCount": 3,
      "ownerUserId": 1,
      "parentId": 1,
      "postTypeId": 1,
      "score": 1,
      "tags": "de-service",
      "title": "How do you do?",
	  "accept": true,
      "comments": [
        {
          "id": 1,
          "creationDate": "2018-10-04",
          "score": 3,
          "postId": 2,
          "text": "uuu n",
          "userId": 1
        }
      ]
    },
    {
      "id": 2,
      "body": "aaa aaa a  a",
      "closedDate": "2019-05-17",
      "creationDate": "2019-04-17",
      "favoriteCount": 3,
      "ownerUserId": 1,
      "parentId": 1,
      "postTypeId": 1,
      "score": 1,
      "tags": "de-service",
      "title": "How do you do?",
	  "accept": true,
      "comments": [
        {
          "id": 1,
          "creationDate": "2018-10-04",
          "score": 3,
          "postId": 2,
          "text": "uuu n",
          "userId": 1
        }
      ]
    },
    {
      "id": 2,
      "body": "aaa aaa a  a",
      "closedDate": "2019-05-17",
      "creationDate": "2019-04-17",
      "favoriteCount": 3,
      "ownerUserId": 1,
      "parentId": 1,
      "postTypeId": 1,
      "score": 1,
      "tags": "de-service",
      "title": "How do you do?",
	  "accept": true,
      "comments": [
        {
          "id": 1,
          "creationDate": "2018-10-04",
          "score": 3,
          "postId": 2,
          "text": "uuu n",
          "userId": 1
        }
      ]
    }
  ]
}`));
  }


  public vote(postId: number): Observable<any> {
    return of(null);
  }

  public addComment(comment: string, postId: number): Observable<any> {
    return of(null);
  }

  public addAnswer(answer: any, parentPostId: number): Observable<any> {
    return of(null);
  }
}
