import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
  },{
    title: 'Services',
    icon: 'fab fa-servicestack',
    children: [
      {
        title: 'Kb Service',
        icon: 'fab fa-servicestack',
        link: '/pages/services',
      }
    ]
  },
  {
    title: 'Releases',
    icon: 'nb-home',
    link: '/pages/upgrades',
  }
];
