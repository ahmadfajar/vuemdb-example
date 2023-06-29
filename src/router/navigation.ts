import type { RouteComponent } from 'vue-router';

export declare type TNavigationRecord = {
  label: string;
  group: string;
  disabled?: boolean;
  path: string;
  view: RouteComponent;
};

const viewResolver = async (name: string) => await import(/* @vite-ignore */ '../views/' + name + '.vue');

export const menuNavs: TNavigationRecord[] = [
  {
    label: 'Alert',
    group: 'Components',
    path: '/components/alert',
    view: () => viewResolver('Components/DemoAlert')
  }
];
