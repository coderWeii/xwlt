<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbar" :key="index">
      <tabbaritem
        @click="itemClick(index, item)"
        class="tabbar-item"
        :item="item"
        :index="index"
        :isActive="isActive"
      ></tabbaritem>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import tabbaritem from "../tab-bar-itrm/tabbaritem.vue";
const tabbar = [
  {
    title: "首页",
    icon: "tabbar/tab_home.png",
    activeIcon: "tabbar/tab_home_active.png",
    path: "/home",
  },
  {
    title: "收藏",
    icon: "tabbar/tab_favor.png",
    activeIcon: "tabbar/tab_favor_active.png",
    path: "/favor",
  },
  {
    title: "订单",
    icon: "tabbar/tab_order.png",
    activeIcon: "tabbar/tab_order_active.png",
    path: "/order",
  },
  {
    title: "信息",
    icon: "tabbar/tab_message.png",
    activeIcon: "tabbar/tab_message.png",
    path: "/message",
  },
];
const isActive = ref(0);
const router = useRouter();
const itemClick = (index, item) => {
  isActive.value = index;
  router.push(item.path);
};
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  border-top: 1px solid #f3f3f3;
  .tabbar-item {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>
