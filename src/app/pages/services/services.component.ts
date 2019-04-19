import { Component } from '@angular/core';

@Component({
  selector: 'ngx-services',
  template: `<div class="col-md-12">
    <nb-card size="small">
      <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
    </nb-card>
  </div>`,
})
export class ServicesComponent {
  tabs: any[] = [
    {
      title: 'Answer/Question',
      route: '/pages/services/answer-question',
    },
    {
      title: 'Improvement',
      route: '/pages/services/improvement',
    },
    {
      title: 'Documentation',
      route: '/pages/services/documentation',
    },
  ];
}
