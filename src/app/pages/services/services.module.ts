import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {routedComponents, ServicesRoutingModule} from "./services-routing.module";
import { DocumentationComponent } from './documentation/documentation.component';
import { AnswerQuestionComponent } from './answer-question/answer-question.component';
import {ImprovementComponent} from "./improvement/improvment.component";

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
  ],
})
export class ServicesModule { }
