<template>
  <AppTopnav />
  <AppHeader />
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppTopnav from '../components/app-topnav.vue'
import AppHeader from '../components/app-header.vue'
import AppFooter from '../components/app-footer.vue'
import { useStore } from '@/store/index';
import { onMounted } from 'vue'
const store = useStore()

onMounted(() => {
  store.dispatch('categoryModule/getList')
})
</script>

<style scoped lang='less'>
</style>
