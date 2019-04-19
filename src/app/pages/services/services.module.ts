import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {routedComponents, ServicesRoutingModule} from "./services-routing.module";
import { DocumentationComponent } from './documentation/documentation.component';
import { AnswerQuestionComponent } from './answer-question/answer-question.component';
import {ImprovementComponent} from "./improvement/improvment.component";
import {NewsPostComponent} from "../extra-components/infinite-list/news-post/news-post.component";
import {NewsPostPlaceholderComponent} from "../extra-components/infinite-list/news-post-placeholder/news-post-placeholder.component";
import {HomeService} from "../home/services/home.service";
import {NewsService} from "../extra-components/services/news.service";

@NgModule({
  imports: [
    ThemeModule,
    ServicesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    DocumentationComponent,
    ImprovementComponent,
    AnswerQuestionComponent,
    NewsPostComponent,
    NewsPostPlaceholderComponent
  ],
  providers: [
    NewsService
  ]
})
export class ServicesModule { }
