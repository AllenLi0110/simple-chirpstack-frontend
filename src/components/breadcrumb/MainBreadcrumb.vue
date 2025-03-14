<template>
  <n-breadcrumb class="breadcrumb">
    <template v-for="(item, index) in route.matched" :key="index">
      <template v-if="index === 0">
        <n-breadcrumb-item>
          <RouterLink :to="{ name: route.name }"> ChirpStack </RouterLink>
        </n-breadcrumb-item>
      </template>
      <template v-if="item.meta.breadcrumbs">
        <n-breadcrumb-item>
          <template v-if="item.meta.breadcrumbs.breadcrumbName">
            <RouterLink :to="{ name: item.meta.breadcrumbs.name }">
              {{ breadcrumbStore.breadcrumbName(item.meta.breadcrumbs.name) }}
            </RouterLink>
          </template>
          <template v-else>
            <RouterLink :to="{ name: item.meta.breadcrumbs.name }">
              {{ item.meta.breadcrumbs.title }}
            </RouterLink>
          </template>
        </n-breadcrumb-item>
      </template>
    </template>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { useBreadcrumbStore } from '../../stores/breadcrumb-store';

const route = useRoute();
const breadcrumbStore = useBreadcrumbStore();
</script>

<style scoped>
.breadcrumb {
  text-align: left;
}
</style>
