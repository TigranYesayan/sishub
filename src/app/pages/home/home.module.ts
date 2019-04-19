import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {routedComponents, HomeRoutingModule} from "./home-routing.module";
import {HomeService} from "./services/home.service";
import {ExtraComponentsModule} from "../extra-components/extra-components.module";

@NgModule({
  imports: [
    ThemeModule,
    HomeRoutingModule,
    Ng2SmartTableModule,
    ExtraComponentsModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
