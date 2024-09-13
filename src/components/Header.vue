<script setup lang="ts"></script>
<template>
    <div class="head">
        <slot name="left">
            <span></span>
        </slot>
        <div class="right">
            <slot name="right">
                <img @click="$router.push('/search')" src="@/assets/img/搜索_search.svg" alt="" srcset="">
                <img @click="$router.push('/message')" src="@/assets/img/邮件_mail.svg" alt="" srcset="">
            </slot>
        </div>
    </div>
    <hr>    
</template>
<style lang="less" scoped>
.head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    min-height: 60px;
    max-height: 60px;

    .right {
        display: flex;
        gap: 15px;
        align-items: center;

        >* {
            cursor: pointer;
        }
    }

    .right {
        img {
            width: 23px;
            height: 23px;
        }
    }
}

@media screen and (min-width: 600px) {
    .head {
        width: 600px;
        margin: auto;
    }
}
</style>