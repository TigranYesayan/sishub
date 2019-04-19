import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {routedComponents, HomeRoutingModule} from "./home-routing.module";
import {NewsService} from "../extra-components/services/news.service";
import {ExtraComponentsModule} from "../extra-components/extra-components.module";
import {NewsPostComponent} from "../extra-components/infinite-list/news-post/news-post.component";
import {NewsPostPlaceholderComponent} from "../extra-components/infinite-list/news-post-placeholder/news-post-placeholder.component";
import {HomeService} from "./services/home.service";

@NgModule({
  imports: [
    ThemeModule,
    HomeRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
    // NewsPostPlaceholderComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
