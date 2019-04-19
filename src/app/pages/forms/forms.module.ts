import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { ButtonsModule } from './buttons/buttons.module';
import {PostsFormsComponent} from "./posts-form/posts-forms.component";

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    ButtonsModule,
  ],
  declarations: [
    ...routedComponents,
    PostsFormsComponent
  ],
})
export class FormsModule { }
