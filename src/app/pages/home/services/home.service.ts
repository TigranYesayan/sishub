import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay, map} from "rxjs/operators";

const TOTAL_PAGES = 7;

export class Post {
  id: number;
  closedDate: string;
  creationDate: string;
  ownerUserId: number;
  score: number;
  tags: string;
  answers: number;
  title: string;
  description: string;
}

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  load(page: number, pageSize: number): Observable<Post[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http
      .get<Post[]>('assets/data/news.json')
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(1500),
      );
  }
}
