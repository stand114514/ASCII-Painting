<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const goBack = () => {
    if (router.options.history.state.back) router.back();
    else router.push('/')
}
</script>
<template>
    <img class="goback-btn" @click="goBack" src="@/assets/img/左_left.svg" alt="" srcset=""></img>
</template>
<style lang="less" scoped>
.goback-btn {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
</style>