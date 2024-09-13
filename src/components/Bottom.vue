<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const isActive = (path: string) => router.currentRoute.value.path === path;

</script>
<template>
    <div class="bottom">
        <span class="canclick">
            <span @click="$router.push('/')" :class="{ 'check': isActive('/') }">首页</span>
        </span>
        <img @click="$router.push('/upload')" class="canclick" src="@/assets/img/添加_add-one.svg" alt="" srcset="">
        <span class="canclick">
            <span @click="$router.push('/space')" :class="{ 'check': isActive('/space') }">我的</span>
        </span>
    </div>
</template>
<style lang="less" scoped>
.bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 6px;
    padding-bottom: 10px;

    .canclick {
        cursor: pointer;

        .check {
            font-weight: bold;
            color: var(--tag-color);
        }
    }

    img {
        padding: 5px;
        border-radius: 3px;
    }
}

@media screen and (min-width: 600px) {
    .bottom {
        width: 600px;
        margin: auto;
    }
}
</style>