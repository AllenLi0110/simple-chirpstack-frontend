import type { RouteRecordRaw } from 'vue-router';

const dashboardRouter: RouteRecordRaw[] = [
  {
    path: '/dashboards',
    component: () => import('@/layouts/AppLayout.vue'),
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
        component: () => import('@/views/dashboard/MainView.vue')
      }
    ]
  }
];

export { dashboardRouter };
