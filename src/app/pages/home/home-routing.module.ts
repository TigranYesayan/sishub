import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeInnerComponent} from "./smart-table/home-inner.component";
import {HomeComponent} from "./home.component";

const routes: Routes = [{
  path: '',
  component: HomeInnerComponent,
  children: [{
    path: 'inner',
    component: HomeComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }

export const routedComponents = [
  HomeComponent,
  HomeInnerComponent,
];
