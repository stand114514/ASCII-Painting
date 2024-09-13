<script setup lang="ts">import PaintingItem from '@/components/PaintingItem.vue';
import { onMounted, ref } from 'vue';

const test = ref<Painting[]>([]);
onMounted(() => {
    fetch("/src/assets/paintings.json", {
        method: 'get'
    }).then(response => response.json())
        .then(data => {
            test.value = data;
        })
        .catch(error => console.error(error))
})</script>
<template>
    <div v-masonry class="masonry" transition-duration="0.3s" item-selector=".painting">
        <PaintingItem v-masonry-tile v-for="item in test" :key="item.id" :item="item"></PaintingItem>
    </div>
</template>
<style lang="less" scoped>
.masonry {
    width: 80%;
    position: relative;
    overflow-y: auto;
    margin: 0 auto;
    padding-bottom: 20px;
    flex-grow: 1;

    -ms-overflow-style: none;
    /* IE 和 Edge */
    scrollbar-width: none;
    /* Firefox */
    overflow: -moz-scrollbars-none;
    /* Older Firefox */

    &::-webkit-scrollbar {
        display: none;
        /* 针对Webkit内核的浏览器，如Chrome和Safari */
    }
}

@media screen and (max-width: 600px) {
    .masonry {
        width: calc(100% - 10px);
    }
}
</style>