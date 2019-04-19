import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {routedComponents, UpgradesRoutingModule} from "./upgrades-routing.module";

@NgModule({
  imports: [
    ThemeModule,
    UpgradesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class UpgradesModule { }
