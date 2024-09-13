<script setup lang="ts">
import BackBtn from '@/components/BackBtn.vue';
import Header from '@/components/Header.vue';
import { onMounted, ref } from 'vue';

const settings = ref([{
    name: "公开主页",
    open: true
}, {
    name: "公开作品列表",
    open: true
}, {
    name: "公开点赞列表",
    open: true
}, {
    name: "公开收藏列表",
    open: false
}])


const currentColor = ref("rgb(189, 87, 87)");
onMounted(() => {
    // currentColor.value = document.documentElement.style.getPropertyValue('--tag-color');
    // 获取设置
})
const changeColor = (event: any) => {
    // 获取颜色输入框的值
    const color = event.target.value;
    currentColor.value = color;
    document.documentElement.style.setProperty('--tag-color', color);
}

const changeBack = () => {
    document.documentElement.style.setProperty('--backimg', "url('https://tse3-mm.cn.bing.net/th/id/OIP-C.mG1V5o_QU2ZZPLKentXjaQHaPI?w=171&h=350&c=7&r=0&o=5&dpr=1.5&pid=1.7')");
}
</script>
<template>
    <div id="box">
        <Header>
            <template #left>
                <div style="display: flex;align-items: center;">
                    <BackBtn></BackBtn>
                    <span style="font-size: 18px;font-weight: bold;">设置中心</span>
                </div>
            </template>
            <template #right>
                <span></span>
            </template>
        </Header>
        <div class="content">
            <div class="setting-box">
                <div><span class="title">数据展示</span>
                    <hr>
                </div>
                <div class="setting-item" v-for="item in settings">
                    <span>{{ item.name }}</span>
                    <label class="switch">
                        <input v-model="item.open" type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <div><span class="title">个性化</span>
                    <hr>
                </div>
                <div class="setting-item">
                    <span>主题色</span>
                    <input @change="changeColor" v-model="currentColor" type="color" />
                </div>
                <div class="setting-item">
                    <span>背景图</span>
                    <div class="setting-item-back">
                        <input type="text" placeholder="输入网络地址...">
                        <span class="or">或</span>
                        <input type="button" value="选择本地文件">
                        <input style="display: none;" @change="changeBack" type="file">
                    </div>
                </div>
                <div class="setting-item">
                    <span>背景色</span>
                    <input type="color" />
                </div>
                <div class="setting-item">
                    <span>背景色透明度</span>
                    <div style="display: flex;align-items: center;gap: 10px;">
                        <input type="range" min="1" max="100" value="50">
                        <span>50%</span>
                    </div>
                </div>
                <div><span class="title">更新与同步</span>
                    <hr>
                </div>
                <div class="setting-item">
                    <input type="button" value="同步到本地">
                    <span>&emsp;</span>
                    <input type="button" value="更新到云端">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
#box {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .content {
        flex-grow: 1;
    }

    .setting-box {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;

        .title {
            font-weight: bold;
            color: var(--tag-color);
        }

        .setting-item {
            display: flex;
            justify-content: space-between;

            .setting-item-back {
                display: flex;
                flex-direction: column;
                width: calc(100% - 120px);
                text-align: center;

                .or {
                    font-size: 12px;
                }
            }
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 48px;
            /* 24px width * 2 for the toggle effect */
            height: 24px;

            input[type=checkbox] {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: var(--color-background);
                transition: .4s;
                border-radius: 12px;
                /* Half of height for a rounded effect */
            }

            .slider:before {
                position: absolute;
                content: "";
                height: 16px;
                width: 16px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                transition: .4s;
                border-radius: 50%;
                /* For a circular shape */
            }

            input[type=checkbox]:checked+.slider {
                background-color: var(--tag-color);
            }

            input[type=checkbox]:checked+.slider:before {
                transform: translateX(24px);
                /* Moves to the other side */
            }
        }

        input {
            height: 30px;
            border: 1px solid var(--tag-color);
            color: white;
            outline: none;
            border-radius: 5px;
            padding: 0 5px;
        }

        input[type=button] {
            background-color: var(--tag-color);
            width: 100%;
        }

        input[type=text],
        input[type=color] {
            background-color: transparent;
        }
    }
}

@media screen and (min-width: 600px) {
    .setting-box {
        width: 600px;
        margin: auto;
    }
}
</style>