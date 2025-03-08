import type { RouteRecordRaw } from 'vue-router';

const gatewaysRouter: RouteRecordRaw[] = [
  {
    path: '/gateways',
    component: () => import('@/layouts/AppLayout.vue'),
    meta: {
      authenticated: true
    },
    children: [
      {
        path: '',
        name: 'Gateways.Main',
        meta: {
          breadcrumbs: {
            title: 'Gateways',
            name: 'Gateways.Main'
          }
        },
        component: () => import('@/views/gateways/MainView.vue')
      }
    ]
  }
];

export { gatewaysRouter };
