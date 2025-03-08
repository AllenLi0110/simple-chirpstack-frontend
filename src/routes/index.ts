import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router';
import { dashboardRouter } from './dashboard';
import { gatewaysRouter } from './gateways';
import { deviceProfilesRouter } from './device-profiles';
import { applicationsRouter } from './applications';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'Dashboard.Main'
    },
    children: [
      ...dashboardRouter,
      ...applicationsRouter,
      ...deviceProfilesRouter,
      ...gatewaysRouter
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
