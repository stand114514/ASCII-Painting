<script setup lang="ts">
import BackBtn from '@/components/BackBtn.vue';
import Header from '@/components/Header.vue';
</script>
<template>
    <div id="box">
        <Header>
            <template #left>
                <div style="display: flex;align-items: center;">
                    <BackBtn></BackBtn>
                    <span style="font-size: 18px;font-weight: bold;">发布作品</span>
                </div>
            </template>
            <template #right>
                <span></span>
            </template>
        </Header>
        <div class="content">
            <div>
                <span>标题</span>
                <input type="text" placeholder="请输入标题">
            </div>

            <div>
                <span>内容</span>
                <textarea rows="20" placeholder="请输入内容"></textarea>
            </div>

            <div class="bottom">
                <input type="button" value="发布">
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
        padding: 10px;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        gap: 10px;
        position: relative;

        input,
        textarea {
            border: 1px solid var(--tag-color);
            color: white;
            width: 100%;
            border-radius: 5px;
        }

        input[type=text],
        textarea {
            background-color: transparent;
            outline: none;
        }

        input[type=text] {
            height: 30px;
            padding: 0 5px;
        }

        textarea {
            padding: 5px;
            resize: none;
            /* 禁止调整大小 */
        }

        input[type=button] {
            background-color: var(--tag-color);
            height: 30px;
        }

        .bottom {
            position: absolute;
            bottom: 10px;
            width: calc(100% - 20px);
            left: 10px;
        }
    }
}

@media screen and (min-width: 600px) {
    .content {
        width: 600px;
        margin: auto;
    }
}
</style>