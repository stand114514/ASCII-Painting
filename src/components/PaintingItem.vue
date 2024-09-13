<script setup lang="ts">
defineProps<{ item: Painting }>();
</script>
<template>
    <div class="painting">
        <div>
            <p class="content">{{ item.content }}</p>
            <div class="title">{{ item.name }}</div>
            <!-- <hr> -->
            <div class="data">
                <div>
                    <svg width="10" height="10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
                            fill="#ffffff" stroke="#ffffff" stroke-width="4" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <span>{{ item.like_num || 0 }}</span>
                </div>
                <div>
                    <svg width="10" height="10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                            fill="#f8cc1c" stroke="#f8cc1c" stroke-width="4" stroke-linejoin="round" />
                    </svg>
                    <span>{{ item.favorite_num || 0 }}</span>
                </div>
                <img v-if="item.state != 1" class="copy" src="@/assets/img/复制_copy-one.svg">
                <span v-else class="state">审核中</span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.painting {
    background-color: var(--color-background-soft);
    border-radius: 5px;
    white-space: pre-wrap;
    margin: 5px;

    >div {
        margin: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    /* 或 pre-line */
    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        // color: var(--tag-color);
    }

    .content {
        overflow-x: auto;
        font-size: 6px;
        text-align: center;
        color: var(--tag-color);
    }

    .author {
        display: flex;
        align-items: center;
        gap: 8px;

        >img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
        }

        .time {
            font-size: 12px;
        }
    }

    .tag {
        border-radius: 3px;
        background-color: var(--tag-color);
        padding: 0 3px;
    }

    .data {
        display: flex;
        gap: 10px;
        font-size: 12px;
        position: relative;
        margin-top: 10px;

        >div {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        svg path {
            fill: var(--tag-color);
            /* 改变SVG填充颜色 */
            stroke: var(--tag-color);
            /* 改变SVG描边颜色 */
        }

        .copy,
        .state {
            padding: 3px;
            border: 1px solid var(--tag-color);
            border-radius: 3px;
            cursor: pointer;
            position: absolute;
            right: 0;
            bottom: 0;
        }

        .copy {
            width: 20px;
            height: 20px;
        }

        .state {
            color: var(--tag-color);
        }
    }
}

@media screen and (min-width: 600px) {
    .painting {
        width: calc(20% - 10px);
        min-width: 160px;
    }
}

@media screen and (max-width: 600px) {
    .painting {
        width: calc(50% - 10px);
    }
}
</style>