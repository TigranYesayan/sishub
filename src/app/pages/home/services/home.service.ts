import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay, map} from "rxjs/operators";

const TOTAL_PAGES = 7;

export class Post {
  id: number;
  accepted: boolean;
  closedDate: string;
  creationDate: string;
  lastActivityDate: string;
  lastEditDate: string;
  lastEditorUserId: number;
  postTypeId: string;
  parentId: number;
  ownerUserId: number;
  score: number;
  tags: string;
  answers: number;
  title: string;
  body: string;
}

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  load(): Observable<Post[]> {
    return this.http
      .get<Post[]>('http://SIS2N046:8080/posts');
  }

  loadByQuery(message: string): Observable<Post[]> {
    return this.http.get<Post[]>('');
  }


}
