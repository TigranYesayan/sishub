import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ServicesInnerComponent} from "./smart-table/services-inner.component";
import {ServicesComponent} from "./services.component";
import {DocumentationComponent} from "./documentation/documentation.component";
import {AnswerQuestionComponent} from "./answer-question/answer-question.component";

const routes: Routes = [{
  path: '',
  component: ServicesComponent,
  children: [{
    path: 'documentation',
    component: DocumentationComponent,
  }, {
    path: 'answer-question',
    component: AnswerQuestionComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule { }

export const routedComponents = [
  ServicesComponent,
  ServicesInnerComponent,
];
