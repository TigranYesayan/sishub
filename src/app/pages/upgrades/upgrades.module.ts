import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {routedComponents, UpgradesRoutingModule} from "./upgrades-routing.module";
import {HomeService} from "../home/services/home.service";

@NgModule({
  imports: [
    ThemeModule,
    UpgradesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],

  providers: [
    HomeService
  ]
})
export class UpgradesModule { }
