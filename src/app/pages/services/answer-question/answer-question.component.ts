import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../extra-components/services/news.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'ngx-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.scss']
})
export class AnswerQuestionComponent implements OnInit {
  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;
  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.newsService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }


  public postTypeId: number;

  constructor(private newsService: NewsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.postTypeId = +queryParams['id'];
    });
  }

  navigateToQuestion(event: any): void {
    this.router.navigateByUrl(`pages/forms/post?id=${event.id}`);
  }

}
