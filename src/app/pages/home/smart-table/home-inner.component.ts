import {Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {SmartTableData} from '../../../@core/data/smart-table';
import {NewsService} from "../../extra-components/services/news.service";
import {HomeService} from "../services/home.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-home-inner',
  styleUrls: ['home-inner.component.scss'],
  templateUrl: './home-inner.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class HomeInnerComponent implements OnInit{

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private homeService: HomeService, private router: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onKeydown(event) {
    if (event.key === "Enter" && event.currentTarget.value) {
      this.homeService.loadByQuery(event.currentTarget.value);
    }
  }

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


  loadData() {
    this.homeService.load()
      .subscribe(nextNews => {
        this.firstCard.placeholders = [];
        this.firstCard.news.push(...nextNews);
        this.firstCard.loading = false;
        this.firstCard.pageToLoadNext++;
      });
  }

  ngOnInit(): void {
    this.loadData();
  }

  navigateToPost(post: any) {
    this.router.navigateByUrl(`pages/forms/post?id=${post.id}`);
  }
}
