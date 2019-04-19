import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {routedComponents, ProjectsRoutingModule} from "./projects-routing.module";

@NgModule({
  imports: [
    ThemeModule,
    ProjectsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ProjectsModule { }
