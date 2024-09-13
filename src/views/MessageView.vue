<script setup lang="ts">
import BackBtn from '@/components/BackBtn.vue';
import Header from '@/components/Header.vue';
import { computed, ref } from 'vue';

const messages = ref([{
    content: "你的作品xxx已通过审核",
    time: "2024-10-12 12:54",
    check: false
}, {
    content: "你的作品xxx未通过审核，原因：zbevgzevgzgvzsvgzvgergvregvzrexbxbhbh",
    time: "2024-10-12 12:54",
    check: false
}])

const isEdit = ref(false);
const editText = computed(()=>{
    if(isEdit.value) {
        return (messages.value.some(item => item.check === true) ? "删除已选" : "取消");
    }
    return "批量编辑"
})
const isAllSelect = ref(false);
const onAllSelect = () => {
    isAllSelect.value = !isAllSelect.value;
    messages.value.forEach(item => item.check = isAllSelect.value);
}
const allSelectText = computed(()=>isAllSelect.value ? "取消全选" : "全选")
</script>
<template>
    <div id="box">
        <Header>
            <template #left>
                <div style="display: flex;align-items: center;">
                    <BackBtn></BackBtn>
                    <span style="font-size: 18px;font-weight: bold;">消息中心</span>
                </div>
            </template>
            <template #right>
                <span @click="isEdit = !isEdit" style="color: var(--tag-color);">{{ editText }}</span>
                <span @click="onAllSelect" style="color: var(--tag-color);" v-show="isEdit">{{ allSelectText }}</span>
            </template>
        </Header>
        <div class="content">
            <div class="message-box">
                <div class="message-item" v-for="item in messages">
                    <input v-model="item.check" type="checkbox" v-show="isEdit">
                    <div class="right">
                        <p>{{ item.content }}</p><br>
                        <span class="time">{{ item.time }}</span>
                    </div>
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

    .message-box {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;

        .message-item {
            background-color: var(--color-background-soft);
            border-radius: 5px;
            padding: 10px;
            display: flex;
            align-items: start;
            gap: 10px;
            .right{
                width: 100%;
            }

            .time {
                float: right;
                font-size: 12px;
            }

            input[type="checkbox"] {
                margin-top: 5px;
                width: 20px;
                height: 20px;
            }

            /* 设置选中时复选框的颜色 */
            input[type="checkbox"]:checked {
                /* 复选框被选中时的填充颜色 */
                accent-color: var(--tag-color);
            }
        }
    }
}

@media screen and (min-width: 600px) {
    .message-box {
        width: 600px;
        margin: auto;
    }
}
</style>