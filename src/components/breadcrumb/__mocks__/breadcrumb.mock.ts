import type { RouteRecordRaw } from 'vue-router';

const MockAppLayout = { template: '<div><slot></slot></div>' };
const MockMainView = { template: '<div>Dashboard</div>' };

export const mockDashboardRoute: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: MockAppLayout,
    meta: {
      authenticated: true,
      breadcrumbs: {
        title: 'Dashboard',
        name: 'Dashboard.Main'
      }
    },
    children: [
      {
        path: '',
        name: 'Dashboard.Main',
        component: MockMainView
      }
    ]
  }
];
