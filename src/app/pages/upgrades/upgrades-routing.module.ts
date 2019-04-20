import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UpgradesInnerComponent} from "./inner/upgrades-inner.component";
import {UpgradesComponent} from "./upgrades.component";

const routes: Routes = [{
  path: '',
  component: UpgradesInnerComponent,
  children: [{
    path: 'inner',
    component: UpgradesComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpgradesRoutingModule { }

export const routedComponents = [
  UpgradesComponent,
  UpgradesInnerComponent,
];
