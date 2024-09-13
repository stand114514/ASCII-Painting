<script setup lang="ts">
import BackBtn from '@/components/BackBtn.vue';
import Header from '@/components/Header.vue';
import Paintings from '@/components/Paintings.vue';
import { onMounted, ref } from 'vue';

const isSearched = ref(false);
const searchText = ref("");
// 打开时自动获取焦点
const searchInputRef = ref();
onMounted(() => {
    searchInputRef.value.focus();
})
const searchHistory = ref(['111', 'hello', '原神', 'euwehvWUIEvhnev'])
const onSearch = () => {
    if (searchText.value) isSearched.value = true;
}
const onSelectHistory = (index: number) => {
    searchText.value = searchHistory.value[index];
    onSearch();
}
const onClearSearch = () => {
    searchText.value = "";
    isSearched.value = false;
}

// 排序
const isSort = ref(false);
const sortBoxRef = ref();
const sortBtnRef = ref();
onMounted(() => {
    window.addEventListener("click", (e) => {
        // 检查点击的目标是否属于 sortBoxRef 或其子元素
        if (isSort.value &&
            !sortBoxRef.value.contains(e.target) &&
            !sortBtnRef.value.contains(e.target)) {
            isSort.value = false;
        }
    }, { capture: true })
})
// 排序方式
let currentSortByType = 0;
const sortByType = ref([{
    name: "默认排序",
    check: true
}, {
    name: "新发布",
    check: false
}, {
    name: "点赞多",
    check: false
}, {
    name: "收藏多",
    check: false
}])
const onChangeSortByType = (index: number) => {
    sortByType.value[currentSortByType].check = false;
    sortByType.value[index].check = true;
    currentSortByType = index;
}
// 发布时间
let currentSortByTime = 0;
const sortByTime = ref([{
    name: "不限",
    check: true
}, {
    name: "最近一天",
    check: false
}, {
    name: "最近一周",
    check: false
}, {
    name: "最近半年",
    check: false
}])
const onChangeSortByTime = (index: number) => {
    sortByTime.value[currentSortByTime].check = false;
    sortByTime.value[index].check = true;
    currentSortByTime = index;
}
</script>
<template>
    <div id="box">
        <Header>
            <template #left>
                <BackBtn></BackBtn>
                <div class="search-box">
                    <input ref="searchInputRef" v-model="searchText" type="text" placeholder="请输入搜索内容">
                    <img src="@/assets/img/搜索_search.svg">
                    <div v-show="searchText" class="search-clear-btn" @click="onClearSearch">×</div>
                </div>
            </template>
            <template #right>
                <span class="search-btn" @click="onSearch">搜索</span>
            </template>
        </Header>
        <template v-if="isSearched">
            <div class="sort-page">
                <div ref="sortBtnRef" class="sort-btn-box" @click="isSort = !isSort">
                    <span>筛选</span>
                    <img src="@/assets/img/筛选_filter.svg" alt="" srcset="">
                </div>
                <Transition name="sort">
                    <div v-show="isSort" class="sort-box">
                        <div ref="sortBoxRef" class="sort-items">
                            <div class="sort-item">
                                <p class="title">排序方式</p>
                                <div class="btns">
                                    <span @click="onChangeSortByType(index)" :class="{ check: item.check }"
                                        v-for="item, index in sortByType">{{ item.name }}</span>
                                </div>
                            </div>
                            <div class="sort-item">
                                <p class="title">发布时间</p>
                                <div class="btns">
                                    <span @click="onChangeSortByTime(index)" :class="{ check: item.check }"
                                        v-for="item, index in sortByTime">{{ item.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <Paintings></Paintings>
        </template>
        <div v-else class="content">
            <div class="model">
                <p class="title">搜索历史</p>
                <div>
                    <span @click="onSelectHistory(index)" class="search-word" v-for="item, index in searchHistory">{{
                        item
                        }}</span>
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

    .search-box {
        position: relative;
        width: 100%;

        input {
            background-color: transparent;
            border: 1.5px solid var(--tag-color);
            border-radius: 20px;
            height: 40px;
            width: 100%;

            outline: none;
            color: var(--color-text);
            padding-left: 36px;
            font-size: 15px;
        }

        img {
            position: absolute;
            height: 24px;
            width: 24px;
            left: 8px;
            top: 8px;
        }
    }

    .search-btn {
        text-wrap: nowrap;
        margin-left: 10px;
        cursor: pointer;
        font-size: 16px;
    }

    .search-clear-btn {
        color: var(--tag-color);
        background-color: var(--color-background-soft);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        line-height: 18px;
        text-align: center;
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }

    .content {
        flex-grow: 1;

        .model {
            padding: 20px;

            .title {
                font-size: 20px;
                font-weight: bold;
            }

            >div {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                padding: 10px;

                .search-word {
                    background-color: var(--color-background-soft);
                    border-radius: 5px;
                    padding: 3px 8px;
                    cursor: pointer;
                }
            }
        }
    }

    .sort-page {
        position: relative;

        .sort-btn-box {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            padding: 10px 0;
        }

        .sort-box {
            height: 100vh;
            width: 100vw;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 2;

            top: 46px;
            left: 0;

            .sort-items {
                display: flex;
                flex-direction: column;
            }

            .sort-item {
                background-color: var(--color-background);
                padding-top: 20px;
                padding-left: 20px;
                padding-right: 20px;

                &:last-child {
                    padding-bottom: 20px;
                }

                .title {
                    font-size: 16px;
                    margin-bottom: 5px;
                }

                .btns {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    gap: 10px;

                    >* {
                        background-color: var(--color-background-soft);
                        border: 1px solid var(--color-background-soft);
                        border-radius: 5px;
                        padding: 5px;
                        width: 100%;
                        text-align: center;
                        cursor: pointer;
                    }

                    .check {
                        color: var(--tag-color);
                        border: 1px solid var(--tag-color);
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 600px) {
    .sort-btn-box {
        margin:0 10px;
    }
}
@media screen and (min-width: 600px) {
    .model,.sort-items,.sort-btn-box {
        width: 600px;
        margin: auto;
    }
}

// 动画
/* 定义进入和离开的活动关键帧 */
.sort-enter-active,
.sort-leave-active {
    transition: all 0.3s ease;
}

/* 进入前的状态 */
.sort-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

/* 离开结束的状态 */
.sort-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>