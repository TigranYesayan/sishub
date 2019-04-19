import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import {HomeRoutingModule, routedComponents} from "../../../home/home-routing.module";
import {HomeService} from "../../../home/services/home.service";
import {ThemeModule} from "../../../../@theme/theme.module";

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
export class NewsPostPlaceholderModule { }
