<template>
  <div>
    <MainHeader>
      <template #title> {{ route.meta.title }} </template>
      <template #action>
        <n-button
          v-if="route.meta.pageAction"
          type="info"
          @click="$router.push({ name: route.meta.pageAction.toRouteName })"
        >
          {{ route.meta.pageAction.actionContent }}
        </n-button>
      </template>
    </MainHeader>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
