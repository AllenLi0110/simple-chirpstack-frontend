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
        case 'Applications.ApplicationId':
          return state.breadcrumbs.applicationName;
        case 'Gateways.GatewayId':
          return state.breadcrumbs.gatewayName;
        case 'DeviceProfiles.DeviceProfileId':
          return state.breadcrumbs.deviceProfileName;
        default:
          return `-`;
      }
    }
  },
  actions: {}
});
