import type { RouteRecordRaw } from 'vue-router';

const deviceProfilesRouter: RouteRecordRaw[] = [
  {
    path: '/device-profiles',
    component: () => import('@/layouts/AppLayout.vue'),
    meta: {
      authenticated: true
    },
    children: [
      {
        path: '',
        name: 'DeviceProfiles.Main',
        meta: {
          breadcrumbs: {
            title: 'Device Profiles',
            name: 'DeviceProfiles.Main'
          }
        },
        component: () => import('@/views/device-profiles/MainView.vue')
      }
    ]
  }
];

export { deviceProfilesRouter };
