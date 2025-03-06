import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router';
import { dashboardRouter } from './dashboard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'Dashboard.Main'
    },
    children: [
      ...dashboardRouter
      // ...applicationsRouter,
      // ...deviceProfilesRouter,
      // ...gatewaysRouter
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
