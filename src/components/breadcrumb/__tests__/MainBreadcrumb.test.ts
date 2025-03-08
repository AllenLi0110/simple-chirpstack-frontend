import {
  createRouter,
  createWebHistory,
  RouterLink,
  type Router
} from 'vue-router';
import { createPinia, type Pinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { mockDashboardRoute } from '../__mocks__/breadcrumb.mock';
import MainBreadcrumb from '../MainBreadcrumb.vue';

describe('MainBreadcrumb - Dashboard', () => {
  let router: Router;
  let pinia: Pinia;

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: mockDashboardRoute
    });
    pinia = createPinia();
  });

  it('render dashboard breadcrumb items correctly', async () => {
    await router.push('/dashboard');
    await router.isReady();

    const wrapper = mount(MainBreadcrumb, {
      global: {
        plugins: [router, pinia]
      }
    });
    const routerLink = wrapper.findComponent(RouterLink);
    expect(routerLink.exists()).toBe(true);
    expect(routerLink.text().trim()).toBe('ChirpStack');
    expect(routerLink.props('to')).toEqual({ name: 'Dashboard.Main' });
  });
});
