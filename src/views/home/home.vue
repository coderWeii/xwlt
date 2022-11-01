<template>
  <home-nav-bar></home-nav-bar>
  <div class="address">
    <div class="location">广州</div>
    <div class="wo">
      <div class="text">我的位置</div>
      <van-icon color="var(--primary-color)" name="aim" />
    </div>
  </div>
</template>

<script setup>
import homeNavBar from "./cpns/home-nav-bar.vue";
</script>

<style lang="less" scoped>
.address {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  .location {
    flex: 5;
  }
  .wo {
    display: flex;
    align-items: center;
    .text {
      margin-right: 10px;
    }
  }
}
</style>
