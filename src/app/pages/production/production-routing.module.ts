import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductionInnerComponent} from "./smart-table/production-inner.component";
import {ProductionComponent} from "./production.component";

const routes: Routes = [{
  path: '',
  component: ProductionInnerComponent,
  children: [{
    path: 'inner',
    component: ProductionComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionRoutingModule { }

export const routedComponents = [
  ProductionComponent,
  ProductionInnerComponent,
];
