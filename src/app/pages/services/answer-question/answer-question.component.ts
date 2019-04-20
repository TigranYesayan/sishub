import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../extra-components/services/news.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {SmartTableData} from "../../../@core/data/smart-table";
import {HomeService, Post} from "../../home/services/home.service";

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

  constructor(private newsService: NewsService, private router: Router, private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    this.loadData();
  }

  navigateToQuestion(event: any): void {
    this.router.navigateByUrl(`pages/forms/post?id=${event.id}`);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.homeService.loadByQuery(event.currentTarget.value).subscribe(data=> {
        this.firstCard.news = data;
        this.firstCard.loading = false;
      });
    }
    if(!event.currentTarget.value) {
      this.firstCard.news = this.allData;
    }
  }
  loadData() {
    this.homeService.load()
      .subscribe(nextNews => {
        this.firstCard.placeholders = [];
        this.firstCard.news.push(...nextNews);
        this.allData.push(...nextNews);
        this.firstCard.loading = false;
        this.firstCard.pageToLoadNext++;
      });
  }

  allData: Post[] = [];

}
