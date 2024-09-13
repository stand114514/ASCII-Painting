<script setup lang="ts">
import BackBtn from '@/components/BackBtn.vue';
import Bottom from '@/components/Bottom.vue';
import Header from '@/components/Header.vue';
import Paintings from '@/components/Paintings.vue';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const userInfo = userStore.userInfo;
let currntLook = 0;
const looks = ref([
    {
        name: "我的发布",
        check: true
    },
    {
        name: "我的喜欢",
        check: false
    },
    {
        name: "我的收藏",
        check: false
    },
    {
        name: "历史浏览",
        check: false
    }
])
const onLookClick = (index: number) => {
    looks.value[currntLook].check = false;
    looks.value[index].check = true;
    currntLook = index;
}
const user_id = ref(-1)
onMounted(() => {
    const id = router.currentRoute.value.query?.id;
    if (id) user_id.value = parseInt(id.toString());
})
</script>
<template>
    <div id="box">
        <Header>
            <template #left>
                <BackBtn v-if="user_id != -1"></BackBtn>
                <span v-else style="font-size: 18px;font-weight: bold;">用户中心</span>
            </template>
        </Header>
        <div class="header">
            <div class="avatar">
                <span class="user">
                    <img :src="userInfo.avatar"
                        alt="" srcset="">
                    <span>{{ userInfo.name }}</span>
                </span>
                <img @click="$router.push('/setting')" class="setting-img" src="@/assets/img/设置_setting.svg" v-show="user_id == -1">
            </div>
            <div class="data">
                <div>
                    <p>{{ userInfo.work_num }}</p>
                    <span>发布</span>
                </div>
                <div>
                    <p>{{ userInfo.like_num }}</p>
                    <span>赞过</span>
                </div>
                <div>
                    <p>{{ userInfo.favorite_num }}</p>
                    <span>收藏</span>
                </div>
                <div>
                    <p>{{ userInfo.history_num }}</p>
                    <span>浏览</span>
                </div>
            </div>
        </div>
        <div class="look">
            <span @click="onLookClick(index)" v-for="(item, index) in looks" :key="index"
                :class="{ check: item.check }">{{
                    item.name }}</span>
        </div>
        <Paintings></Paintings>
        <Bottom v-show="user_id == -1"></Bottom>
    </div>
</template>
<style lang="less" scoped>
#box {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .header {
        >div {
            display: flex;
            flex-direction: row;
            margin: 20px;
        }

        .avatar {
            align-items: center;
            justify-content: space-between;

            .user {
                display: flex;
                align-items: center;
                gap: 15px;

                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%
                }

                span {
                    font-size: 24px;
                }
            }

            .setting-img {
                width: 25px;
                height: 25px;
                cursor: pointer;
            }
        }

        .data {
            justify-content: space-around;
            text-align: center;

            p {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }

    .look {
        padding: 2px;
        background-color: var(--color-background-soft);
        border-radius: 5px;
        justify-content: space-around;

        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;

        span {
            padding: 5px;
            border-radius: 5px;
            font-size: 14px;
            width: 25%;
            text-align: center;
            cursor: pointer;

            &.check {
                background-color: var(--color-background);
                color: var(--tag-color);
            }
        }
    }

    .content {
        flex-grow: 1;
    }
}

@media screen and (max-width: 600px) {
    .look {
        margin: 0 10px;
    }
}

@media screen and (min-width: 600px) {

    .header,
    .look {
        width: 600px;
        margin: auto;
    }
}
</style>