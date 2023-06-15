<script setup>
import {RouterView, useRouter} from 'vue-router'

let router = useRouter();
const routerList = router.getRoutes()

const handleRouterGo = (item) => {
    router.push(item.path)
}
</script>

<template>
    <div class="app-box">
        <div class="app-sidebar">
            <ul>
                <li v-for="(item,index) in routerList" :key="item.name" @click="handleRouterGo(item)">
                    {{ item.name}}
                </li>
            </ul>
        </div>
        <div class="app-context"><RouterView/></div>
    </div>
</template>

<style lang="less" scoped>
.app-box {
    height: 100%;
    width: 100%;
    display: flex;

    .app-context {
        flex: 1;
    }

    .app-sidebar {
        width: 200px;
        background-color: #000;
        height: 100%;
        color: #e3e3e3;
        padding: 12px;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                padding: 12px 24px;
                cursor: pointer;

                &:hover {
                    background-color: #333;
                }
            }
        }
    }
}
</style>
