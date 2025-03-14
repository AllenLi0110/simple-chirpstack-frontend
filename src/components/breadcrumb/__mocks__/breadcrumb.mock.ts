import { vi } from 'vitest';
import type { RouteRecordRaw } from 'vue-router';

vi.mock('@/layouts/AppLayout.vue', () => ({
  default: {
    template: '<div><slot></slot></div>'
  }
}));
vi.mock('@/views/dashboard/MainView.vue', () => ({
  default: {
    template: '<div>Dashboard Main View</div>'
  }
}));
vi.mock('@/views/device-profiles/MainView.vue', () => ({
  default: {
    template: '<div>Device Profile Main View</div>'
  }
}));
vi.mock('@/views/gateways/MainView.vue', () => ({
  default: {
    template: '<div>Gateway Main View</div>'
  }
}));
vi.mock('@/views/applications/MainView.vue', () => ({
  default: {
    template: '<div>Applications Main View</div>'
  }
}));
vi.mock('@/layouts/HeaderLayout.vue', () => ({
  default: {
    template: '<div>Header Layout</div>'
  }
}));

export const mockBreadcrumbName: string = 'ChirpStack';
export const mockDashboardRoute: RouteRecordRaw[] = [
  {
    path: '/dashboard',
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
export const mockDeviceProfileRoute: RouteRecordRaw[] = [
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
export const mockGatewayRoute: RouteRecordRaw[] = [
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
export const mockApplicationRoute: RouteRecordRaw[] = [
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
