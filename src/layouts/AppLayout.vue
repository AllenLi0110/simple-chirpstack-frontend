<template>
  <n-layout class="app-layout">
    <n-layout-header class="app-header" bordered>
      <n-space align="center" size="small" class="header-content">
        <img
          :src="chirpstackLogo"
          :alt="'ChirpStack Logo - A logo for ChirpStack application'"
          width="64"
          height="64"
        />
        <h2>Simple ChirpStack</h2>
      </n-space>
    </n-layout-header>
    <n-layout has-sider class="app-layout-side">
      <n-layout-sider class="app-side">
        <n-space vertical class="side-space">
          <n-menu :options="menuOptions" />
        </n-space>
      </n-layout-sider>
      <n-layout class="content-layout" embedded>
        <main-breadcrumb></main-breadcrumb>
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui';
import type { MenuItem } from '../definitions';
import { RouterLink } from 'vue-router';
import chirpstackLogo from '/images/chirpstackLogo.png';

const menuOptionItems: MenuItem[] = [
  {
    label: 'Dashboard',
    routeName: 'Dashboard.Main',
    icon: '/images/dashboardLogo.png'
  },
  {
    label: 'Device Profiles',
    routeName: 'DeviceProfiles.Main',
    icon: '/images/deviceProfilesLogo.png'
  },
  {
    label: 'Gateways',
    routeName: 'Gateways.Main',
    icon: '/images/gatewaysLogo.png'
  },
  {
    label: 'Applications',
    routeName: 'Applications.Main',
    icon: '/images/applicationsLogo.png'
  }
];

const menuOptions: MenuOption[] = menuOptionItems.map((item) => ({
  label: () =>
    h(
      RouterLink,
      { to: { name: item.routeName } },
      {
        default: () => h('strong', item.label)
      }
    ),
  key: item.routeName,
  icon: () =>
    h('img', {
      src: item.icon,
      alt: `${item.label} Logo`,
      width: '32',
      height: '32'
    })
}));
</script>

<style scoped>
.app-layout {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.app-header {
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 10;
}
.header-content {
  width: 100%;
  padding: 20px;
}
.content-layout {
  padding: 24px;
}
.app-layout-side {
  height: 100%;
  padding-top: 110px;
}
.app-side {
  background-color: whitesmoke;
}
.side-space {
  justify-content: space-between;
  height: 100%;
}
</style>
