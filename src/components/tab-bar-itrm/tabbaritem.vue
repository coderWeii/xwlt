<template>
  <div class="item">
    <img
      class="imgs"
      :src="
        index === isActive ? imgToUrl(item.activeIcon) : imgToUrl(item.icon)
      "
    />

    <span :class="index === isActive ? 'active' : ''" class="title">{{
      item.title
    }}</span>
  </div>
</template>

<script setup>
import imgToUrl from "@/uilts/imgToUrl";
defineProps({
  item: Object,
  index: Number,
  isActive: Number,
});
</script>

<style lang="less" scoped>
.item {
  display: flex;
  flex-direction: column;
  .imgs {
    width: 40px;
    height: 30px;
  }
  .title {
    font-size: 12px;
  }
  &.active {
    color: var(--primary-color);
  }
}
</style>
