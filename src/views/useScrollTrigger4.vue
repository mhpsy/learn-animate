<script setup>
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


import {onMounted, ref} from "vue";

const box = ref()
const container = ref()

const listEl = ref([])
const listRef = (el) => {
    listEl.value.push(el)
}

console.log(listEl.value)


gsap.registerPlugin(ScrollTrigger);
onMounted(() => {

    gsap.to(box.value,
        {
            scrollTrigger: {
                trigger: box.value,
                start: 'top center',
                // end: () => `+=${box.value.parentNode.offsetHeight}`,
                // end: () => `+=${container.value.offsetHeight - window.innerHeight / 2}`,
                end: () => `+=${container.value.offsetHeight - listEl.value[0].offsetHeight * 2}`,//相当于加上整个父级容器 再减去两个右边元素的高度
                markers: true,
                pin: true,
                pinSpacing: false,
            },
        }
    )

    // console.log(box.value.parentNode.offsetHeight)

    listEl.value.forEach((el) => {
        gsap.to(el, {
            opacity: 1,
            x: 100,
            scrollTrigger: {
                trigger: el,
                start: 'top center',
                // toggleActions: "play reverse play none",
            },
        })
    })

})


</script>

<template>
    <main>
        <div style="height: 100vh;background-color: pink;"></div>
        <div class="container" ref="container">
            <div class="box" ref="box">
                <div class="box-text">box-text</div>
            </div>
            <ul class="list">
                <li :ref="listRef" v-for="i in 10">{{ i * 10000 }} {{ i * 10000 }} {{ i * 10000 }} {{ i * 10000 }}</li>
            </ul>
        </div>
        <div style="height: 100vh;background-color: pink;"></div>
        <div style="height: 100vh;background-color: blue;"></div>
    </main>
</template>


<style lang="less" scoped>
.container {
    display: flex;
    justify-content: space-between;
    padding: 0 10rem;

    .box {
        width: 100px;
        height: 100px;
        background-color: red;
    }

    .list {
        li {
            height: 25vh;
            background-color: #ccc;
            margin-bottom: 10px;
            opacity: 0;
            transform: translateX(-100px);
        }
    }
}


</style>
