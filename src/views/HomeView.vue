<script setup lang="ts">
import Bottom from '@/components/Bottom.vue';
import Header from '@/components/Header.vue';
import Paintings from '@/components/Paintings.vue';
import { ref } from 'vue';

const mode = ref("推荐")
</script>

<template>
  <div class="box">
    <Header>
      <template #left>
        <div class="left">
          <span @click="mode = '推荐'" :class="{check: mode=='推荐'}">推荐</span>
          <span @click="mode = '最新'" :class="{check: mode=='最新'}">最新</span>
        </div>
      </template>
    </Header>
    <Paintings></Paintings>
    <Bottom></Bottom>
  </div>
</template>

<style lang="less" scoped>
.box {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  .left {
    display: flex;
    gap: 15px;
    align-items: center;

    >* {
      cursor: pointer;
      transition: 0.2s;
    }
  }

  .left {
    .check {
      font-size: 18px;
      font-weight: bold;
      color: var(--tag-color);
    }
  }
}
</style>