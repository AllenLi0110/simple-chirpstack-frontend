import type { RouteRecordRaw } from 'vue-router';

const applicationsRouter: RouteRecordRaw[] = [
  {
    path: '/applications',
    component: () => import('@/layouts/AppLayout.vue'),
    meta: {
      authenticated: true
    },
    children: [
      {
        path: '',
        name: 'Applications.Main',
        meta: {
          authenticated: true,
          title: 'Applications',
          breadcrumbs: {
            title: 'Applications',
            name: 'Applications.Main'
          },
          pageAction: {
            type: 'create',
            toRouteName: 'Applications.Create',
            actionContent: 'Add Application'
          }
        },
        components: {
          HeaderLayout: () => import('@/layouts/HeaderLayout.vue'),
          default: () => import('@/views/applications/MainView.vue')
        }
      }
    ]
  }
];

export { applicationsRouter };
