import { defineStore } from 'pinia';
import type { BreadcrumbNames } from '../definitions/breadcrumb';

export const useBreadcrumbStore = defineStore('breadcrumb', {
  state: (): BreadcrumbNames => ({
    breadcrumbs: {
      dashboardName: '',
      applicationName: '',
      deviceProfileName: '',
      gatewayName: ''
    }
  }),
  getters: {
    breadcrumbName: (state) => (breadcrumbName: string) => {
      switch (breadcrumbName) {
        case 'Dashboard.Main':
          return state.breadcrumbs.dashboardName;
        case 'Applications.Main':
          return state.breadcrumbs.applicationName;
        case 'Gateways.Main':
          return state.breadcrumbs.gatewayName;
        case 'DeviceProfiles.Main':
          return state.breadcrumbs.deviceProfileName;
        default:
          return `-`;
      }
    }
  },
  actions: {}
});
