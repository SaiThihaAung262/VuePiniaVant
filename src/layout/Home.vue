<template>
  <div class="page-tab">
    <router-view/>
  </div>
  <van-tabbar v-model="active">
    <van-tabbar-item
        replace
        :to="route.path"
        v-for="(route, index) in homeRouters"
        :key="index"
    >
      <!--{{ t(route.meta.title) }}-->
      {{ route.meta.title }}
      <template #icon>
        <van-icon class="menu-icon" :name="route.meta.icon_select" v-if="active == index"/>
        <van-icon class="menu-icon" :name="route.meta.icon" v-else/>
      </template>
    </van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import {ref, reactive, onMounted, computed} from "vue";
import {homeRouters} from "../router/modules/home";
import {useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();
const activeRoute = computed(() => {
  return router.currentRoute.value.path;
});

const active = computed({
  get() {
    return homeRouters.findIndex((item) => item.path === activeRoute.value);
  },
  set() {
  },
});


onMounted(() => {
});
</script>

<style lang="scss" scoped>
.page-tab {
  padding-top: var(--van-nav-bar-height);
  padding-bottom: var(--van-tabbar-height);
  position: relative;
}

.menu-icon {
  color: rgb(53, 84, 134);
}
</style>
