import {
  createRouter,
  createWebHistory,
  RouterLink,
  type Router
} from 'vue-router';
import { createPinia, type Pinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import {
  mockApplicationRoute,
  mockBreadcrumbName,
  mockDashboardRoute,
  mockDeviceProfileRoute,
  mockGatewayRoute
} from '../__mocks__/breadcrumb.mock';
import MainBreadcrumb from '../MainBreadcrumb.vue';

const routes = [
  { name: 'Dashboard', route: mockDashboardRoute },
  { name: 'DeviceProfile', route: mockDeviceProfileRoute },
  { name: 'Gateway', route: mockGatewayRoute },
  { name: 'Application', route: mockApplicationRoute }
];
const getRoutePath = (name: string): string => {
  switch (name) {
    case 'Dashboard':
      return '/dashboard';
    case 'DeviceProfile':
      return '/device-profiles';
    case 'Gateway':
      return '/gateways';
    case 'Application':
      return '/applications';
    default:
      return '/applications';
  }
};

describe('MainBreadcrumb - Routes', () => {
  let router: Router;
  let pinia: Pinia;

  beforeEach(() => {
    pinia = createPinia();
    router = createRouter({
      history: createWebHistory(),
      routes: [
        ...mockDashboardRoute,
        ...mockDeviceProfileRoute,
        ...mockGatewayRoute,
        ...mockApplicationRoute
      ]
    });
  });

  routes.forEach(({ name, route }) => {
    it(`renders ${name} breadcrumb items correctly`, async () => {
      await router.push(getRoutePath(name));
      await router.isReady();

      const wrapper = mount(MainBreadcrumb, {
        global: {
          plugins: [router, pinia]
        }
      });

      const routerLink = wrapper.findComponent(RouterLink);
      let breadcrumbMeta: any;
      const routeName = name;
      if (routeName === 'Dashboard') {
        const [{ meta }] = route;
        breadcrumbMeta = meta;
      } else {
        const [{ children }] = route;
        const [{ meta }] = children || [];
        breadcrumbMeta = meta;
      }

      const { name: breadcrumbName } = breadcrumbMeta.breadcrumbs;
      expect(routerLink.exists()).toBe(true);
      expect(routerLink.text().trim()).toBe(mockBreadcrumbName);
      expect(routerLink.props('to')).toEqual({
        name: breadcrumbName
      });
    });
  });
});
