import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectsInnerComponent} from "./smart-table/projects-inner.component";
import {ProjectsComponent} from "./projects.component";

const routes: Routes = [{
  path: '',
  component: ProjectsInnerComponent,
  children: [{
    path: 'smart-table',
    component: ProjectsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }

export const routedComponents = [
  ProjectsComponent,
  ProjectsInnerComponent,
];
