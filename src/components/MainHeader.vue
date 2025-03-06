src/components/MainHeader.vue
<template>
  <div class="header">
    <div class="flex items-center">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="description">
        <slot name="description"></slot>
      </div>
    </div>
    <div>
      <slot name="action"></slot>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  margin-bottom: 16px;
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.title {
  font-size: large;
  font-weight: 700;
}
.description {
  font-size: small;
  font-weight: 500;
  color: gray;
}
</style>
